import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import React, { useMemo, useRef } from 'react'
import styles from './MyTable.module.css'

interface DataType {
  id?: number
  name?: string
  email?: string
  phone?: string
  animalType?: string
  gender?: string
  age?: string
  status?: string
}

interface ColumnType {
  Header: string
  accessor: string
}

interface PropsType {
  data: DataType[]
}

export const MyTable = ({ data }: PropsType) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const columns = useMemo<ColumnDef<DataType>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 200,
      },
      {
        accessorKey: 'name',
        header: 'Имя хозяина',
        size: 200,
      },
      {
        accessorKey: 'email',
        header: 'Электронная почта',
        size: 200,
      },
      {
        accessorKey: 'phone',
        header: 'Телефон',
        size: 200,
      },
      {
        accessorKey: 'animalType',
        header: 'Вид животного',
        size: 200,
      },
      {
        accessorKey: 'gender',
        header: 'Пол животного',
        size: 200,
      },
      {
        accessorKey: 'age',
        header: 'Возраст',
        size: 200,
      },
      {
        accessorKey: 'status',
        header: 'Статус',
        size: 200,
      },
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  })
  const { container, tableContainer, theadContainer } = styles
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { rows } = table.getRowModel()
  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableContainerRef.current,
    count: rows.length,
    overscan: 5,
    estimateSize: () => 24,
  })
  const virtualRows = rowVirtualizer.getVirtualItems()

  return (
    <div className={container}>
      <div ref={tableContainerRef} className={tableContainer}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={theadContainer}
                          {...{
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            <tr>
              <td />
            </tr>
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<DataType>
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

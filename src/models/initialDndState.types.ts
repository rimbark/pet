export interface ContentType {
  id: string
  content: string
}

export interface DataType {
  [key: string]: ContentType
}

export interface FieldsContentType {
  id: string
  title: string
  dataIds: string[]
}

interface FieldsType {
  [key: string]: FieldsContentType
}

type FieldsOrderType = Array<keyof DataType>
export interface RegistrationDataType {
  data: DataType
  fields: FieldsType
  fieldsOrder: FieldsOrderType
}

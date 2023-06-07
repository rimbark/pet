import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes'

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

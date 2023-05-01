import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { loader as appLoader } from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotePage, { loader as noteLoader } from './pages/NotePage'
import { ErrorPage } from './pages/error/ErrorPage'
import NoteForm from './pages/NoteForm'
import { action as newNoteAction } from './routes/createNote'
import { action as deleteAction } from './routes/deleteNote'
import { action as updateAction } from './routes/updateNote'
import { action as updatedImportant } from './pages/NotePage'
import { Index } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: '/note/:noteId',
            element: <NotePage />,
            loader: noteLoader,
            action: updatedImportant
          },
          {
            path: '/note/:noteId/destroy',
            action: deleteAction
          },
          {
            path: '/note/:noteId/update',
            element: <NoteForm/>,
            loader: noteLoader,
            action: updateAction
          },
          {
            path: '/new',
            element: <NoteForm/>,
            action: newNoteAction
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
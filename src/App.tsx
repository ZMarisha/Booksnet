import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import './App.css';

const App:React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <BookList />,
        },
        {
          path: "/:id",
          element: <Book />,
        },
      ]
    }])

    return (
      <div className='app'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    )
}

export default App;

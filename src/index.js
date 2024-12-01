import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './appstore/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Middelboard from './features/muiltytodos/middelboard';
import Todolisttodos from './features/muiltytodos/todolist';
import Boardtodos from './features/muiltytodos/board';
import Donetodos from './features/muiltytodos/done,complete';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
      path: "/",
      element:<Middelboard></Middelboard>,
      children:[

        {
        path:'/' ,
        element:<Boardtodos></Boardtodos> 
        }
        ,
        {
        path:'/todos/:id' ,
        element:<Todolisttodos></Todolisttodos> ,
        // children:[
        //   {
        //     path:'/todos/:id',
        //     element: <Donetodos></Donetodos>
        //     }
        // ]
        },
        
      ]
      
    }
  ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}  ></RouterProvider>
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

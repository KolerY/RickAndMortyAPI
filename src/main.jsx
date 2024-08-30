import React from 'react'
import ReactDOM from 'react-dom/client'
import mesRoutes from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import store from './store/store.js';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={mesRoutes} />
    </Provider>
  </React.StrictMode>,
)

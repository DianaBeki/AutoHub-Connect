import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <BrowserRouter> 
    <Provider store={store}> 
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

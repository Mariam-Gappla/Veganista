import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './components/Redux/redux.js';
createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
        <App />
    </Provider>
 
)

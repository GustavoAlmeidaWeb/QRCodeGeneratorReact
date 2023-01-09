import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// CSS + Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// React Router DOM
import { BrowserRouter } from 'react-router-dom';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

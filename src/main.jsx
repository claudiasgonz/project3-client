import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <AuthProvider>
                  <App />
            </AuthProvider>
      </BrowserRouter>
)

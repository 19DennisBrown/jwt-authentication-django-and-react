import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import PrivateRoute from './utils/PrivateRoute'


function App() {
  return (
    <div className="App">
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
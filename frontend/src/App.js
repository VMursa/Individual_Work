import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Students from './components/Students';
import Manage from './components/Manage';
import { AuthProvider, AuthContext } from './AuthContext'; // Update the path accordingly
import LoginComponent from './components/LoginComponent'; // Assuming this is your login component

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/students" element={<ProtectedRoute><Students/></ProtectedRoute>} />
          <Route path="/manage" element={<ProtectedRoute><Manage/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

// ProtectedRoute component
function ProtectedRoute({ children }) {
  const { currentUser } = React.useContext(AuthContext);

  if (!currentUser) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return children;
}

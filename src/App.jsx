import './App.css';
import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/Dashboard';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';

function App() {
  // Using the useSelector hook to access the "auth" state from the Redux store
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <div>
      {/* Setting up the React Router with BrowserRouter */}
      <Router>
        {/* Including the Header component */}
        <Header />

        {/* Defining routes using the Routes and Route components */}
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Home />} />

          {/* Route for the signin page, conditionally rendering Signin or Dashboard based on authentication */}
          <Route path='/signin' element={!auth.currentUser ? <Signin /> : <Dashboard />} />

          {/* Route for the signup page, conditionally rendering Signup or Dashboard based on authentication */}
          <Route path='/signup' element={!auth.currentUser ? <Signup /> : <Dashboard />} />

          {/* Route for the task manager page, wrapped with RequireAuth for authentication */}
          <Route
            path='/taskmanager'
            element={
              <RequireAuth>
                <TaskManager />
              </RequireAuth>
            }
          />

          {/* Route for the dashboard page, wrapped with RequireAuth for authentication */}
          <Route
            path='/dashboard'
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

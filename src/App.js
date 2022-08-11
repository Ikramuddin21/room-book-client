import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="booking/:id" element={<Booking />} />
          <Route path="my-booking" element={<MyBookings />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="add-service" element={<AddService />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './layout/Login'
import { AdminRoute, CustomerRoute } from './components/ProtectedRoute'
import { AdminLayout } from './layout/AdminLayout'
import { CustomerLayout } from './layout/CustomerLayout'
import { Home } from './page/customer/Home'
import { TourDetail } from './page/customer/TourDetail'
import { Tour } from './page/customer/Tour'
import { Hotel } from './page/customer/Hotel'
import { Booking } from './components/customer/Booking'
import { DashBoard } from './page/admin/DashBoard'
import { UserManager } from './page/admin/UserManager'
import { TourManager } from './page/admin/TourManager'
import { TourBookingManager } from './page/admin/TourBookingManager'
import { Register } from './layout/Register'
import { AuthProvider } from './context/AuthContext'


function App() {



  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route
            path="admin/*"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<DashBoard />} />
            <Route path="usermanager" element={<UserManager />} />
            <Route path="tourmanager" element={<TourManager />} />
            <Route path="bookingmanager" element={<TourBookingManager />} />
          </Route>

          <Route path='customer/*' element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="tour" element={<Tour />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="tourdetail/:id" element={<TourDetail />} />
            <Route path="booking" element={
              <CustomerRoute>
                <Booking />
              </CustomerRoute>
            } />
          </Route>

          <Route path='/' element={<Navigate to='/customer' replace />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

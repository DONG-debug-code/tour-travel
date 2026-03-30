## Giới thiệu dự án
# Tour Travel là web app mô phỏng hệ thống đặt tour du lịch thực tế:
# Người dùng có thể xem tour, xem chi tiết tour
# Admin có thể quản lý tour
# Dữ liệu realtime từ Firebase

# Dự án được xây dựng theo mô hình Frontend tách Backend API/Firebase giống dự án thực tế.

## Tính năng chính
# Khách hàng (Customer)
 - Xem danh sách tour
 - Xem chi tiết tour
 - Phân loại tour theo category
 - Giao diện responsive
 - Routing SPA bằng React Router
# Quản trị viên (Admin)
 - Trang Dashboard quản trị
 - Quản lý tour (CRUD)
 - Layout Admin riêng
 - Route bảo vệ bằng ProtectedRoute
 - Phân quyền Admin / Customer
# Authentication
 - Firebase Authentication
 - Context API quản lý trạng thái đăng nhập

## Công nghệ sử dụng
# React (Vite)
# React Router DOM
# Firebase
# Firestore
# Authentication
# TailwindCSS
# Axios
## Điểm nổi bật kỹ thuật
 - SPA routing chuẩn production
 - Protected Route (role based)
 - Realtime data từ Firestore
 - Tách layout Admin / Customer
 - Cấu trúc folder scalable
## Cài đặt project
 - git clone https://github.com/DONG-debug-code/tour-travel.git
 - cd tour-travel
 - npm install
 - npm run dev
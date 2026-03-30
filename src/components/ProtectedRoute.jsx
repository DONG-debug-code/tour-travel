import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ROLE_HOME = {
    admin: "/admin",
    customer: "/home", // ← đổi thành route trang chủ customer của bạn
};

const ProtectedRoute = ({ children, allowedRole }) => {
    const { user, role, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;

    // Sai role → redirect về đúng trang của role hiện tại, không phải /login
    if (role !== allowedRole) {
        const home = ROLE_HOME[role];
        return <Navigate to={home ?? "/login"} replace />;
    }

    return children;
};

export const AdminRoute = ({ children }) => (
    <ProtectedRoute allowedRole="admin">{children}</ProtectedRoute>
);

export const CustomerRoute = ({ children }) => (
    <ProtectedRoute allowedRole="customer">{children}</ProtectedRoute>
);
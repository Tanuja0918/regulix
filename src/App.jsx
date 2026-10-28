import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import ComplianceWizard from './pages/ComplianceWizard';
import AuditList from './pages/AuditList';

export default function App() {
  const isAuthenticated = true; // Toggle or connect to auth state

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route index element={<DashboardHome />} />
          <Route path="compliance/new" element={<ComplianceWizard />} />
          <Route path="audits" element={<AuditList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
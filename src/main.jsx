import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import ModulesLanding from './pages/ModulesLanding'
import ModuleDetail from './pages/ModuleDetail'
import StakeholdersLanding from './pages/StakeholdersLanding'
import StakeholderDetail from './pages/StakeholderDetail'
import ComplianceLanding from './pages/ComplianceLanding'
import AdminLanding from './pages/AdminLanding'
import PricingLanding from './pages/PricingLanding'
import RequestDemo from './pages/RequestDemo'
import ProjectsLanding from './pages/ProjectsLanding'
import ProjectDetail from './pages/ProjectDetail'
import DocumentsLanding from './pages/DocumentsLanding'
import DocumentDetail from './pages/DocumentDetail'
import RFIsLanding from './pages/RFIsLanding'
import RFIDetail from './pages/RFIDetail'
import TasksLanding from './pages/TasksLanding'
import TaskDetail from './pages/TaskDetail'
import ApprovalsLanding from './pages/ApprovalsLanding'
import ApprovalDetail from './pages/ApprovalDetail'
import DashboardsLanding from './pages/DashboardsLanding'
import DashboardRouter from './pages/DashboardRouter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/modules" element={<ModulesLanding />} />
        <Route path="/modules/:slug" element={<ModuleDetail />} />
        <Route path="/stakeholders" element={<StakeholdersLanding />} />
        <Route path="/stakeholders/:slug" element={<StakeholderDetail />} />
        <Route path="/compliance" element={<ComplianceLanding />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/pricing" element={<PricingLanding />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/projects" element={<ProjectsLanding />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/documents" element={<DocumentsLanding />} />
        <Route path="/documents/:id" element={<DocumentDetail />} />
        <Route path="/rfis" element={<RFIsLanding />} />
        <Route path="/rfis/:id" element={<RFIDetail />} />
        <Route path="/tasks" element={<TasksLanding />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/approvals" element={<ApprovalsLanding />} />
        <Route path="/approvals/:id" element={<ApprovalDetail />} />
        <Route path="/dashboards" element={<DashboardsLanding />} />
        <Route path="/dashboard/:role" element={<DashboardRouter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

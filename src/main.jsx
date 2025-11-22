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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

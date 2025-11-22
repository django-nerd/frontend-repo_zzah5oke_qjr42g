import { useParams, Navigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import DashboardLabour from './DashboardLabour'
import DashboardEngineer from './DashboardEngineer'
import DashboardProjectManager from './DashboardProjectManager'
import DashboardContractor from './DashboardContractor'
import DashboardClient from './DashboardClient'
import DashboardOwner from './DashboardOwner'
import DashboardAuditor from './DashboardAuditor'
import DashboardAdmin from './DashboardAdmin'
import DashboardClientExecutive from './DashboardClientExecutive'

const map = {
  labour: DashboardLabour,
  site_engineer: DashboardEngineer,
  project_manager: DashboardProjectManager,
  contractor: DashboardContractor,
  client: DashboardClient,
  owner: DashboardOwner,
  auditor: DashboardAuditor,
  admin: DashboardAdmin,
  client_executive: DashboardClientExecutive,
}

export default function DashboardRouter() {
  const { role } = useParams()
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />
  if (role && user.role !== role) return <Navigate to={`/dashboard/${user.role}`} replace />

  const Cmp = map[user.role] || DashboardLabour
  return <Cmp />
}

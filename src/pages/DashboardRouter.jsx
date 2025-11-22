import { useParams } from 'react-router-dom'
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
  const Cmp = map[role] || DashboardLabour
  return <Cmp />
}

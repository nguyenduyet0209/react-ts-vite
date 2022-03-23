import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation()

  const { access_token } = useAppSelector(state => state.auth)

  if (!access_token) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute

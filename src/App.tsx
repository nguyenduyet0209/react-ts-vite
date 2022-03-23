import { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/pageNotFound/NotFound'
import { Footer } from './components/Footer'
import { routeConfig } from './routes/routes'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { setProfile } from './app/slices/authSlice'
import { useGetProfileQuery } from './app/services/authApi'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  const dispatch = useAppDispatch()
  const { access_token } = useAppSelector(state => state.auth)

  const { data: user } = useGetProfileQuery('user-profile', {
    skip: !access_token,
  })
  useEffect(() => {
    if (access_token && user && Object.keys(user).length > 0) {
      dispatch(setProfile(user))
    }
  }, [access_token, user])

  return (
    <div className='wrapper'>
      {/* <Header /> */}
      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            {routeConfig.map(route => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  route.isProtected ? (
                    <PrivateRoute>
                      <route.component />
                    </PrivateRoute>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

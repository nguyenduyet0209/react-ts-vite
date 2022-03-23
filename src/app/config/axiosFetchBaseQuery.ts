import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
// import { API_BASE_URL } from '../../utils/constants'
import {
  getTokenFromCookies,
  setRefreshTokenToCookies,
} from '../../utils/cookiesFunction'
import { RootState } from '../store'
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://apiadmin.nhatduyet.me/api/v1/',
  // baseUrl: API_BASE_URL,

  prepareHeaders: (headers, { getState }) => {
    /**
     * nnduyet comment
     * get token from cookies
     */
    const token = (getState() as RootState).auth.access_token
    console.log(token)
    const access_token = getTokenFromCookies()
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`)
    }
    return headers
  },
})
/**
 * nnduyet comment
 * define interface refreshToken
 */
// interface RefreshResultInterface {
//   [key:string]: string;
// }
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  // any,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult: any = await baseQuery(
      '/refresh-token',
      api,
      extraOptions,
    )
    if (refreshResult.data) {
      // const refresh_token = refreshResult.data.refresh_token
      // store the new token
      setRefreshTokenToCookies(refreshResult.data.refresh_token)
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // callback Logout
      // logout()
    }
  }
  console.log('result in fetch base', result)
  return result
}
export default baseQueryWithReauth

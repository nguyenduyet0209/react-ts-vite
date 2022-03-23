import Cookies from 'js-cookie'
export function convertTimeToExpires(expires: number) {
  return new Date(new Date().getTime() + expires * 1000)
}
/**
 * nnduyet comment
 * Set/Get @param refresh_token
 */
export function setTokenToCookies(access_token: string, expires?: number) {
  if (expires) {
    Cookies.set('access_token', access_token, {
      expires: convertTimeToExpires(expires),
    })
  } else {
    Cookies.set('access_token', access_token)
  }
}
export function getTokenFromCookies() {
  return Cookies.get('access_token')
}
/**
 * nnduyet comment
 * Set/Get @param refresh_token
 */
export function setRefreshTokenToCookies(
  refresh_token: string,
  expires?: number,
) {
  if (expires) {
    Cookies.set('refresh_token', refresh_token, {
      expires: convertTimeToExpires(expires),
    })
  } else {
    Cookies.set('refresh_token', refresh_token)
  }
}
export function getRefreshTokenFromCookies() {
  return Cookies.get('refresh_token')
}

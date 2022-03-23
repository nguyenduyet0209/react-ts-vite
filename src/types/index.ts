export interface RoleItem {
  id: number
  name: string
  display_name: string
}
export interface User {
  avatar: string
  email: string
  id: number
  name: string
  path_avatar: string | null
  phone: number
  roles: RoleItem[]
}

export interface PermissonItem {
  display_name: string
  id: number
  key_code: string
  name: string
  parent_id: number
}

// export type AuthState = {
//   access_token: string | null
//   user: User | null
// }

export type ErrorDataType = {
  error: string
}
export type ErrorType = {
  status: number
  data: ErrorDataType
}

export type AuthState = {
  access_token: string | null
  user: User | null
  permissions?: PermissonItem[]
}

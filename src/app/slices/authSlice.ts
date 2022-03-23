import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from '../../types'
import { getTokenFromCookies } from '../../utils/cookiesFunction'
// import type { RootState } from '../../app/store'

// export const getProfileByTokenAction = createAsyncThunk(
//   'auth/getProfileByTokenAction',
//   async () => {
//     try {
//       const response = await fetch(
//         'https://apiadmin.nhatduyet.me/api/v1/user-profile',
//         {
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${getTokenFromCookies()}`,
//           },
//         },
//       )
//       const responseData = await response.json()
//       return responseData
//     } catch (error) {
//       console.log(error)
//     }
//   },
// )

const authSliceReducer = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    access_token: getTokenFromCookies() || null,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { access_token, user },
      }: PayloadAction<{ access_token: string; user: User }>,
    ) => {
      state.access_token = access_token
      state.user = user
    },
    setProfile: (state, { payload: { user } }) => {
      state.user = user
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(getProfileByTokenAction.fulfilled, (state, action) => {
  //     if (action.payload) {
  //       state.user = action.payload.user
  //     }
  //   })
  // },
})
export const { setCredentials, setProfile } = authSliceReducer.actions
export default authSliceReducer.reducer
// export const selectCurrentUser = (state: RootState) => state.auth.user

import axios from 'axios'
import { API_URL } from '../constants'
import { REQUEST_ERRORS, REQUEST_SUCCESS, REQUEST_PENDING, GET_USERS } from './types'
import { Dispatch } from 'react';

export interface GetUsersAction {
  type: string,
  payload: object
}

export const getUsers = () => (dispatch: Dispatch<GetUsersAction>) => {
  dispatch({type: REQUEST_PENDING, payload: { pending: true}})
  return axios.get(API_URL)
    .then(res => {
      const { status } = res
      dispatch({type: REQUEST_SUCCESS, payload: { status, pending: false }})
      return dispatch({
        type: GET_USERS,
        payload: res.data || [] 
      })
    })
    .catch(err => {
      dispatch({ type: REQUEST_ERRORS, payload: { error: `${err}`, pending: false }})
    });
}
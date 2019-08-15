import axios from 'axios'
import { API_URL } from '../constants'
import { REQUEST_ERRORS, REQUEST_SUCCESS, REQUEST_PENDING, GET_USERS } from './types'
import { Dispatch } from 'react';

interface GetAction {
  type: string,
  payload: object
}

export const getUsers = () => (dispatch: Dispatch<GetAction>) => {
  dispatch({type: REQUEST_PENDING, payload: { pending: true}})
  return axios.get(API_URL)
    .then(res => {
      dispatch({type: REQUEST_SUCCESS, payload: { pending: false }})
      return dispatch({
        type: GET_USERS,
        payload: res.data || {}
      })
    })
    .catch(err => {
      dispatch({ type: REQUEST_ERRORS, payload: { message: `${err}`, pending: false }})
    });
}
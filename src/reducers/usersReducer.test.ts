import { usersReducer, UsersAction, User } from './usersReducer'
import { GET_USERS } from '../actions/types';

describe('usersReducer Tests', () => {
  it('should return the initial state', () => {
    expect(usersReducer(undefined, {} as UsersAction)).toEqual({ users: [] })
  })
  it('should successfully handle GET_USERS', () => {
    expect(usersReducer(undefined, { type: GET_USERS, payload: [{ id: 1 } as User]})).toEqual({ users: [{id: 1}]})
  })

})
import React from 'react'
import {connect } from 'react-redux'
import { getUsers } from '../actions/usersActions'

export interface ContainerProps {
  api: { error?: string, pending: boolean},
  getUsers: () => void,
  users: [],
  children: (error: string, loading: boolean, data: any) => JSX.Element
}

export interface ContainerState {
  
}

class Container extends React.Component<ContainerProps, ContainerState> {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const {api, users } = this.props
    const { error = '', pending: loading } = api
    return this.props.children(error, loading, users)
  }
}

const mapStateToProps = (state: { api: any, users: any}) => ({
  api: state.api,
  users: state.users,
});

const mapDispatchToProps = {
  getUsers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

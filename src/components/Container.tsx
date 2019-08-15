import React from 'react'
import {connect } from 'react-redux'
import Table from './Table'
import { getUsers } from '../actions/usersActions'

export interface ContainerProps {
  api: { error?: string, pending: boolean},
  getUsers: () => void,
  users: []
}

export interface ContainerState {
  
}

class Container extends React.Component<ContainerProps, ContainerState> {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const {api, users} = this.props
    if (api.error) {
      return 'Something went wrong, please refresh the page'
    }
    if (api.pending) {
      return 'Loading...'
    }
    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {/* <Table tableData={users} /> */}
      </div>
    )
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

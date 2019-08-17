import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { getData, getDataModel } from '../../util';
import { AnyAction } from 'redux';

export interface ContainerProps {
  api: { error?: string; pending: boolean };
  getData: () => void;
  model: string;
  children: (error: string, loading: boolean, data: {}) => JSX.Element;
  data: { [x: string]: {} };
}

class Container extends React.Component<ContainerProps, {}> {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { api, data, model, children } = this.props;
    const { error = '', pending: loading } = api;
    return children(error, loading, data[model]);
  }
}

const mapStateToProps = (
  state: { api: { error?: string; pending: boolean }; [x: string]: {} },
  ownProps: { model: string }
) => {
  return {
    api: state.api,
    data: getDataModel(state, ownProps.model)[ownProps.model]
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: { model: string }
) => {
  return {
    getData: getData(ownProps.model, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

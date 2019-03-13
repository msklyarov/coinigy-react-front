import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchCoinigyDataAction from '../module/actions/fetch';
import clearCoinigyDataAction from '../module/actions/clear';

import ViewDataComponent from './components/view_data';

class ViewDataContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoinigyData();
    this.setState({
      timerId: setInterval(this.props.fetchCoinigyData, 10000)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
    this.props.clearCoinigyData();
  }

  render() {
    return !this.props.coinigy.data ?
      <div>Loading...</div> :
      <ViewDataComponent data={this.props.coinigy.data[0]} />;
  }
}

const select = (state, props) => ({
  coinigy: state.coinigy,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCoinigyData: fetchCoinigyDataAction,
      clearCoinigyData: clearCoinigyDataAction,
    },
    dispatch,
  );

export default connect(
  select,
  mapDispatchToProps,
)(ViewDataContainer);

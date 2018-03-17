import { connect } from 'react-redux';
import { tickTimer } from '../../reducers/disabled';
import App from './app';

function mapDispatchToProps(dispatch) {
  return {
    onTimer: time => dispatch(tickTimer(time)),
  };
}

export default connect(null, mapDispatchToProps)(App);

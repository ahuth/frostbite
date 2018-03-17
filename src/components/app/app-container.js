import { connect } from 'react-redux';
import App from './app';
import { tickTimer } from '../../actions';

function mapDispatchToProps(dispatch) {
  return {
    onTimer: time => dispatch(tickTimer(time)),
  };
}

export default connect(null, mapDispatchToProps)(App);

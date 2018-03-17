import { connect } from 'react-redux';
import App from './app';

function mapDispatchToProps(dispatch) {
  return {
    onTimer: (time) => console.log(time),
  };
}

export default connect(null, mapDispatchToProps)(App);

import { connect } from 'react-redux';

import homeController from './homeController';
import * as actionshome from './actions';
const mapStateToProps = state => {
  return { home: state.home };
};

export default connect(
  mapStateToProps,
  { ...actionshome },
)(homeController);

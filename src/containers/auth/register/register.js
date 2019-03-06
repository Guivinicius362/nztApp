import { connect } from 'react-redux';

import RegisterController from './registerController';
import Actions from './actions';

const mapStateToProps = state => {
	return { user: state.login };
};

export default connect(
	mapStateToProps,
	{ ...Actions },
)(RegisterController);

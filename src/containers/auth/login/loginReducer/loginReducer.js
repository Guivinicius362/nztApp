const initialState = {
	loggedIn: false,
	loading: false,
};

export default function(state = initialState, action) {
	try {
		switch (action.type) {
			default:
				return state;
		}
	} catch (e) {}
}

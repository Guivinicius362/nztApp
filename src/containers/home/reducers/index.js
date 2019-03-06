const initialState = {
  loading: false,
};

export default function(state = initialState, action) {
  try {
    switch (action.type) {
      case 'zzz': {
        return {
          ...state,
          loading: true,
        };
      }
      default:
        return { ...state };
    }
  } catch (e) {
    console.log(e);
  }
}

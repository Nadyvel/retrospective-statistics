const initialState = {
    statsData: []
  }
  
  const statsData = (state = initialState, action) => {
    switch (action.type) {
      case 'STATS_ACTION':
        return {
          ...state,
          statsData: action.payload
        }
  
      default:
        return state;
    }
  }
  export default statsData
  
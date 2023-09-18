const initialState = {
  jobs: {
    content: [],
  },
  favComp: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: { ...state.jobs, content: [...action.payload] },
      };

    case "ADD_TO_FAV_COMP":
      return {
        ...state,
        favComp: {
          ...state.favComp,
          content: [...state.favComp.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAV_JOB":
      return {
        ...state,
        favComp: {
          ...state.favComp,
          content: state.favComp.content.filter(elm => elm !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;

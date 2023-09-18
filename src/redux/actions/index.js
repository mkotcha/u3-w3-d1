export const SET_JOBS = "SET_JOBS";
export const UNSET_JOBS = "UNSET_JOBS";
export const ADD_TO_FAV_COMP = "ADD_TO_FAV_COMP";
export const REMOVE_FROM_FAV_COMP = "REMOVE_FROM_FAV_COMP";

export const unsetJobsAction = () => ({ type: UNSET_JOBS });
export const addToFavCompAction = job => ({ type: ADD_TO_FAV_COMP, payload: job });
export const removeFromFavCompAction = job => ({ type: REMOVE_FROM_FAV_COMP, payload: job });

export const getJobsAction = (query, searchParam) => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?" + searchParam + "=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: SET_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

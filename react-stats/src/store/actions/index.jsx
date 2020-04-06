import { getBase } from "../api";

export function addInfoToStore(data) {
    return {
        type: "STATS_ACTION",
        payload: data,
    };
}
//this function is responsible for API call and for action that launches the action, which passes data to reducer, and reducer passes data to global store.
export const fetchData = val => dispatch => {
    return getBase(val)
        .then(data => dispatch(addInfoToStore(data)))
        .catch(err =>
            console.log(
                "error"
            )
        );
};

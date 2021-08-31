export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: "cats/catsLoading" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "cats/catsLoaded", payload: json.images });
      })
      .catch((error) => {
        dispatch({ type: "cats/catsError", payload: error });
      });
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const cats = useSelector((state) => state.entities);

  const status = useSelector((state) => state.status);

  console.log(status);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCats());
  };

  return (
    <div>
      <h1>CatBook</h1>
      <button onClick={handleClick}>Fetch</button>
      <CatList catPics={cats} status={status} />
    </div>
  );
}

export default Cats;

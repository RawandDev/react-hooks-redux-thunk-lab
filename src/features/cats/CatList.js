import React from "react";
import Loader from "react-loader-spinner";

function CatList({ catPics, status }) {
  const displayCats = catPics.map((cat) => (
    <div key={cat.id}>
      <img src={cat.url} alt="cat" />
    </div>
  ));

  return (
    <div>
      {status === "loading" ? (
        <Loader
          type="Grid"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        displayCats
      )}
    </div>
  );
}

export default CatList;

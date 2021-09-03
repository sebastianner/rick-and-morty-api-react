import React from "react";
import CharList from "../components/CharList";
import Loader from "../components/Loader";

function Main(props) {
  return (
    <React.Fragment>
      <ul className="grid grid-col justify-center gap-5">
        <CharList state={props.state} />
      </ul>
      {props.state.loading && (
        <div className="flex justify-center mt-10">
          <Loader />
        </div>
      )}
    </React.Fragment>
  );
}

export default Main;

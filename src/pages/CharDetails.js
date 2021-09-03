import React, { Component } from "react";
import Loader from "../components/Loader";

class CharDetails extends Component {
  render() {
    const data = this.props.state.data;
    const dataKeys = Object.keys(data);

    if (this.props.state.loading) {
      return (
        <div className="vh flex justify-center items-center">
          <Loader />
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="flex justify-center gap-20 mt-10">
          <div className="flex flex-col justify-center">
            <h2>{`${dataKeys[1]} : ${data.name}`}</h2>
            {data.status === "Alive" ? (
              <p>{`${dataKeys[2]} : ${data.status}`}</p>
            ) : (
              <p>{`${dataKeys[2]} : ${data.status}`}</p>
            )}
            <p>{`${dataKeys[3]} : ${data.species}`}</p>
            <p>{`${dataKeys[5]} : ${data.gender}`}</p>
            <p>{`${dataKeys[6]} : ${data.origin.name}`}</p>
            <p>{`${dataKeys[7]} : ${data.location.name}`}</p>
          </div>
          <div>
            <img src={data.image} alt={`${data.name} Image`} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CharDetails;

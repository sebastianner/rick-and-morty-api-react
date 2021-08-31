import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="relative w-60 rounded-md cursor-pointer shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500">
          <img
            className="object-fill"
            src={this.props.character.image}
            alt=""
          />
          <div className="absolute bottom-0 p-1 w-full bg-gray-900 bg-opacity">
            <h1 className="mt-4 text-2xl text-white">
              {this.props.character.name}
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;

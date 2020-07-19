import React from "react";
import "./Images.css";

class Images extends React.Component {
  render() {
    return (
      <div className="images">
        {this.props.images.map((data) => (
          <img key={data.id} alt={data.description} className="image" src={data.urls.small} />
        ))}
      </div>
    );
  }
}

export default Images;

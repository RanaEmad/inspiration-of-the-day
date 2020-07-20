import React from "react";
import "./Images.css";
import { Link } from "react-router-dom";

class Images extends React.Component {
  render() {
    return (
      <div className="images">
        {this.props.images.map((data) => (
         <Link key={data.id} to={"/single-image/"+data.id} className="image" > <img alt={data.description} src={data.urls.small} /></Link>
        ))}
      </div>
    );
  }
}

export default Images;

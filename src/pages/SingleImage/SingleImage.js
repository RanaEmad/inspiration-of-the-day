import React from "react";
import "./SingleImage.css";
import { Link } from "react-router-dom";

class SingleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
    };
  }
  componentDidMount() {
    fetch("https://api.unsplash.com/photos/" + this.props.match.params.id, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          image: data,
        });
      })
      .catch((error) => console.error(error));
  }
  render() {
    if (this.state.image.user && this.state.image.urls) {
      return (
        <div className="single-image">
          <figure>
            <img
              alt={this.state.image.description}
              src={this.state.image.urls.full}
            />
            <figcaption>
              Photographed By{" "}
              <span className="photographer">
                <Link to={"/photographer/" + this.state.image.user.id}>
                  {this.state.image.user.name}
                </Link>
              </span>
            </figcaption>
          </figure>
        </div>
      );
    }
    return "";
  }
}

export default SingleImage;

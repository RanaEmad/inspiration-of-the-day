import React from "react";
import "./Photographer.css";
import Images from "../../components/Images/Images";

class Photographer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      images: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/users/" + this.props.match.params.username,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          user: data,
        });
      })
      .catch((error) => console.error(error));

    fetch(
      "https://api.unsplash.com/users/" +
        this.props.match.params.username +
        "/photos?order_by=latest",
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          images: data,
        });
      })
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <div className="photographer">
        <div className="info">
          <h1 className="header">{this.state.user.name}</h1>
          <div className="info-block">
            <p className="header">Bio</p>
            <p>{this.state.user.bio}</p>
          </div>
          <div className="info-block">
            <p className="header">Location</p>
            <p>{this.state.user.location}</p>
          </div>
          <div className="info-block">
            <p className="header">Portfolio</p>
            <p><a href={this.state.user.portfolio_url}>{this.state.user.portfolio_url}</a></p>
          </div>
        </div>
        <div className="photographer-images">
          <h1 className="header"> Latest Work</h1>
          <Images images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default Photographer;

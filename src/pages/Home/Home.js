import React from "react";
import "./Home.css";
import Images from "../../components/Images/Images";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    fetch("https://api.unsplash.com/photos/random?count=12", {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
      },
    })
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
      <div className="home">
        <h1 className="header">Inspiration Of The Day</h1>
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default Home;

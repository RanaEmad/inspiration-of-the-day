import React from "react";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    fetch("https://api.unsplash.com/photos/random?count=9", {
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
    return <div className="home"></div>;
  }
}

export default Home;

import React from "react";

const apiForPic = "https://pixabay.com/api/?key=5926034-701cedbed0d2d8e20edfb8b7a&image_type=photos&category=nature&editors_choice=true&safesearch=true&per_page=200&order=latest&pretty=true&page=2";

const styles = {
    transition: 'filter 0.5s linear'
};

export class Background extends React.Component {

  constructor(props) {
    super(props);
    this.state = { i: 0 };
  }

  componentWillMount() {
    this.requestImageApi().then(this.updateImageState);
    setInterval(this.nextImage, 2000);
  }

  requestImageApi = () => {
    return fetch(apiForPic)
            .then(response => response.json())
            .then(response => {
              this.setState({
                imageList: response.hits
              });
            });
  };

  updateImageState =() =>{
    console.log('Am I here ?');
    this.setState({
        backImage: this.state.imageList[this.state.i].webformatURL
      });
  };

  nextImage = () => {
    if (this.state.i == 200) {
      this.setState({ i: 0 });
    } else {
      this.setState({ i: this.state.i + 1 });
    }

    this.updateImage();
  };

  updateImage = () => {
    this.onHide();
    setTimeout(this.updateImageState, 500);

    setTimeout(function () {
      this.onShow();
    }.bind(this), 500);
  };

  onHide = () => {
    this.setState({
      filter: "opacity(0)"
    });
  };
  onShow = () => {
    this.setState({
      filter: "opacity(1)"
    });
  };

  render(){
    return(
      <section
        className="quote-wrap"
        style={{ ...styles, filter: this.state.filter, backgroundImage: `url(${this.state.backImage})` }}
      />
    )
  };
}

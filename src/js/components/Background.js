import React from "react";

export class Background extends React.Component {

  componentWillMount() {
    this.requestImageApi();
  }

  requestImageApi = () => {
    return fetch("https://pixabay.com/api/?key=5926034-701cedbed0d2d8e20edfb8b7a&image_type=photos&category=nature&editors_choice=true&safesearch=true&per_page=200&order=latest&pretty=true&page=2")
            .then(response => response.json())
            .then(response => {
              console.log(response);
            });
  };

  render(){
    return(
      <section
        className="quote-wrap"
        style={{ backgroundImage: `url(${'https://pixabay.com/get/e830b80f21f6023ed95c4518b7494f94e577e1d104b0144195f4c07fa7efb2_640.jpg'})` }}
      />
    )
  };
}

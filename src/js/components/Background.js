import React from "react";

export class Background extends React.Component {
  render(){
    return(
      <section
        className="quote-wrap"
        style={{ backgroundImage: `url(${'https://pixabay.com/get/e830b80f21f6023ed95c4518b7494f94e577e1d104b0144195f4c07fa7efb2_640.jpg'})` }}
      />
    )
  };
}

import React from "react";
import fetchJsonp from 'fetch-jsonp';

export class Quote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = () => {
    fetchJsonp('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=callback', {
      jsonpCallback: "callback",
      jsonpCallbackFunction: "callback"
    })
      .then(function(response) {
        return response.json();
      })
      .then(
        function(json) {
          this.setState({
            text: json.quoteText,
            author: json.quoteAuthor,
          });
        }.bind(this)
      )
      .catch(function(ex) {
        console.log("API call failed", ex);
      });
  };

  render() {
    return (
      <div className="quote-wrap">
        <blockquote className="">
          <p className="quote">{this.state.text}</p>
          <footer className="quote-author">{this.state.author}</footer>
        </blockquote>
      </div>
    );
  }
}

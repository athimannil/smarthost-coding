import React from "react";
import fetchJsonp from 'fetch-jsonp';

export class Quote extends React.Component {

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
        function (response) {
          console.log(response);
        }
      )
      .catch(function(ex) {
        console.log("API call failed", ex);
      });
  };

  render() {
    return (
      <div className="quote-wrap">
        <blockquote className="">
          <p className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <footer className="quote-author">Authout Name</footer>
        </blockquote>
      </div>
    );
  }
}

import { Component } from "react";
import Suggestion from "./Suggestion";
import Title from "./Title";

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions full-width">
        <Title />
        <div className="suggestions-list">
          <Suggestion />
          <div className="view-more">
            <a href="./index.html#" title="">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;

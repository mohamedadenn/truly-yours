import React, { Component } from "react";
import "./directory.style.scss";
import sectionsData from "./directory.data";

//Components
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: sectionsData,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}
export default Directory;

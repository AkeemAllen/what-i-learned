import React from "react";
import "../utils/stylesheets/layout.scss";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout-container">
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;

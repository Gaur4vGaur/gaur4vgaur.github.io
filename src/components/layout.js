import React from 'react';

class Layout extends React.Component {
  render() {
    const { title1, title2, subtitle, children } = this.props

    return (
      <div className="app-container">
        <header>
          <h1>{title1}</h1>
          <h1>{title2}</h1>
          <p>{subtitle}</p>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Gaurav Gaur</footer>
      </div>
    )
  }
}

export default Layout;

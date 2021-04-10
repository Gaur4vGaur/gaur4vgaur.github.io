import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ScrollToTop from "react-scroll-to-top";

function Layout({ title, subtitle, children }) {
    const { home } = useStaticQuery(
        graphql`
			query {
				home: file(absolutePath: { regex: "/home.png/" }) {
					childImageSharp {
						fluid(maxWidth: 250, maxHeight: 250) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`
    );

    const homeIcon = home.childImageSharp.fluid;

    return (
        <div className="app-container">
            <header>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className="homeLinkContainer">
                    {title !== 'Code Thoughts' && (
                        <Link to="/">
                            <Img fluid={homeIcon} alt="Link to go to home page" />
                        </Link>
                    )}
                </div>
            </header>
            <main>
                <ScrollToTop smooth />
                {children}
            </main>
            <footer>© {new Date().getFullYear()}, Gaurav Gaur</footer>
        </div>
    );
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;

  return <BackgroundImage fluid={imageData}>{children}</BackgroundImage>;
};

const StyledBackground = styled(Background)`
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledBackground;

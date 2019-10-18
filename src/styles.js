import React from 'react';
import styled from 'styled-components';
import codeImage from './assets/code.png';
import { Container as MuiContainer } from '@material-ui/core';

export const Background = styled.div`
  background-image: url(${codeImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled(props => (
  <MuiContainer maxWidth="md" {...props} />
))`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const IconRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

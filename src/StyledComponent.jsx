import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: tranparent;
  border-radius: 3px;
  border: 2px solid #ec5b69;
  color: #b9eaff;
  margin: 0.1rem;
  padding: 0.25rem 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `};
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}

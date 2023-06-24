import React from 'react';
import { styled } from 'styled-components';

export default function Header() {
  return <Styled.Wrapper>Header</Styled.Wrapper>;
}

const Styled = {
  Wrapper: styled.header`
    width: 100%;
    height: 52px;
    background-color: black;
  `,
};

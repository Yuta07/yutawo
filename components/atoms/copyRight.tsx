import React from 'react';
import styled from 'styled-components';

export const CopyRight = () => {
  return (
    <>
      <CopyRightText>
        © {new Date().getFullYear()},
        <Link href="https://github.com/Yuta07" target="_blank">
          Yutaka Miyazaki
        </Link>
        - All rights reserved.
      </CopyRightText>
    </>
  );
};

const CopyRightText = styled.p`
  font-size: 12px;
`;

const Link = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: #222f3e;
  font-weight: 550;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;
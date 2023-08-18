//socialLogin의 스타일 구현

import styled from "styled-components";

export const SocialLogin = styled.div`
  border: 1px solid ${(props) => props.borderColor || "black"};
  width: 12rem;
  height: 3rem;
  cursor: pointer;
  display: flex;

  align-items: center;
  margin-right: 1rem;
  background-color: ${(props) => props.backgroundColor || "none"};
`;

export const SocialLoginImg = styled.img`
  width: 25px;
  height: auto;
  margin-left: 15px;
`;

export const SocialLoginText = styled.span`
  font-size: 24px;
  font-weight: 400;
  right: -7%;
  position: relative;
  margin-left: 20px;
  color: ${(props) => props.color || "black"};
`;

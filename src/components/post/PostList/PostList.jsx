import React from "react";
import styled from "styled-components";
import MinWidthButtonGroup from "./MinWidthButtonGroup";
import SortStandard from "./SortStandard";
import PostListScroll from "./PostListScroll";

const PostListContainer = styled.div`
  width: 450px;
  /* height: 70%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid black; */
  border-radius: 20px;
  background-color: white;
  color: black;
  margin-left: 120px;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
  box-shadow: 0px 0px 15px rgba(73, 73, 73, 0.5);
  height: 780px;
`;

export default function PostList() {
  return (
    <PostListContainer>
      {/* <MinWidthButtonGroup /> */}
      <SortStandard />
      <PostListScroll />
    </PostListContainer>
  );
}

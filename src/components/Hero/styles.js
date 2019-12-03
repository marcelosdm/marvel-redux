import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const HeroBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 1px;
  padding: 1.5em 0.5em;
`;

export const Picture = styled.img`
  height: 10em;
  overflow: hidden;
  width: 10em;
`;

export const Name = styled.h3`
  align-items: center;
  background-color: #2e2e2e;
  color: #e8e8e8;
  display: flex;
  height: 3em;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 15px;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
`;

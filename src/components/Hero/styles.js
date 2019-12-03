import styled from 'styled-components';

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
  max-width: 10em;
  padding: 1.5em 0.5em;
  transition: 0.2s ease;
`;

export const Picture = styled.img`
  border-top-left-radius: 15px;
  height: 10em;
  overflow: hidden;
  &:hover {
    background-color: #000;
    border: solid #000;
    opacity: 0.5;
    /* border-radius: 30px; */
  }
`;

export const Name = styled.h3`
  align-items: center;
  background-color: #2e2e2e;
  color: #e8e8e8;
  display: flex;
  height: 4em;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 15px;
  margin-bottom: 0.3em;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
`;

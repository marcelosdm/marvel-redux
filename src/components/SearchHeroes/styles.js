import styled from 'styled-components';

export const Searchbar = styled.form`
  align-items: center;
  display: flex;
  margin: 1em;
`;

export const Field = styled.input`
  border: none;
  border-bottom: solid 2px black;
  /* height: 2.5em; */
  font-family: 'Marvel', sans-serif;
  font-size: 20px;
  font-weight: 700 bold;
  margin: 1em;
  padding: 0.2em;
  text-transform: uppercase;
  width: 20em;

  &:focus {
    border-bottom: solid 2px #f3db9f;
  }

  &:before {
    background: url('search-icon.svg');
  }
`;

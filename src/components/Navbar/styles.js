import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background: #141414;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  /* width: 10em; */
`;

export const Li = styled.li`
  padding: 2em;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
  }
`;

export const Logo = styled.img`
  content: url('logo-marvel.svg');
`;

import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `
};

const colors = {
  default: css`
    background: #161616;
    border: 1px solid #fff;

    &:hover {
      border: 1px solid #777777;
    }
  `,
  danger: css`
    background: #e7432a;

    &:hover {
      background: #9f0013;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #777777;
    }
  `
};

const Button = styled.button.attrs({ type: 'button' })`
  border-radius: 3px;
  color: #fff;
  border: 0;
  font-size: 12px;
  font-weight: 700;
  padding: 0 10px;
  text-transform: uppercase;
  transition: background-color 0.2s ease;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.color || 'default']}
`;
export default Button;

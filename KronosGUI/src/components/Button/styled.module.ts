import styled from "styled-components";

const Button = styled.button`
  --color: #40497f;
  padding: 0.2em 1.4em;
  background-color: transparent;
  border-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  color: var(--color);
  z-index: 1;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: var(--color);
    transition: 1s ease;
  }

  &::before {
    top: -1em;
    left: -1em;
  }

  &::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  &:hover::before,
  &:hover::after {
    height: 410px;
    width: 410px;
  }

  &:hover {
    color: #fefefe;
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export default { Button };

import styled from 'styled-components'

export default styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;

  &:active {
    color: inherit;
  }

  &:focus {
    outline: 2px solid hotpink;
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`

import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  border: var(--color3-main);
  border-radius: 5px;
`

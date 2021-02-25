import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  border: var(--color3-main);
  border-radius: 5px;
`
// Card with a picture
// <CardWrapper>
//   <CardProper>
//     <CardImage src="" alt=""/>
//     <CardH3>A Super Wonderful Headline</CardH3>
//     <CardP>Lorem ipsum sit dolor amit</CardP>
//   </CardProper>

// </CardWrapper>

export const CardWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
`
export const CardProper = styled.li`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`
export const CardH3 = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
`
export const CardImage = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  & ~ * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
export const CardP = styled.p``

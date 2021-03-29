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

export const WrapperCentringDiv = styled.div`
  display: grid;
  place-items: center;
`
export const CardWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 1.5rem 0rem 1.5rem;
  display: grid;
  /* grid-template-columns: repeat(5, 1fr) */
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
  @media (min-width: 1440px) and (max-width: 1679px) {
    max-width: 80vw;
  }
  @media (min-width: 1680px) {
    max-width: 60vw;
  }
`
export const CardProper = styled.li`
  display: grid;
  place-items: center;
  background-color: var(--color4-shadow);
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color4-shadow);
  padding-bottom: 1rem;
  transition: all 0.3s ease-in-out;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`
export const CardProperActive = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--color1-main);
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color4-shadow);
  padding: 1rem;
  padding-bottom: 1rem;

  position: absolute;
  left: 30%;
  top: 10%;
  max-width: 40vw;
  min-width: 300px;
  @media (max-width: 680px) {
    position: fixed;
    z-index: 10;
    max-width: 80vw;
    left: 20px;
    top: 20px;
  }
`

export const CardH3 = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
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
export const CardP = styled.p`
  margin-bottom: 1rem;
`

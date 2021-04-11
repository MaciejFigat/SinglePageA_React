import styled from 'styled-components'

export const DivCardWrap = styled.div`
  /* background: ${(props) => props.theme.linearGradientSecondary};
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out; */
  /* &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  } */
`

export const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  border: var(--color3-main);
  border-radius: 5px;
`
export const StyledImageAlt = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  /* border: var(--color3-main); */
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
  background: ${(props) => props.theme.linearGradientSecondary};
  border-radius: 0.5rem;
  font-family: 'Roboto Slab', serif;
  transition: all 0.3s ease-in-out;
  /* below is needed for non blurry transformation in Chrome */
  will-change: transform;
  /* -webkit-backface-visibility: hidden;   */
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  /* backface-visibility: hidden; */
  min-height: 100%;
  transform: scale(0.98);
  /* -webkit-font-smoothing: antialiased; */
  &:hover {
    /* transform: scale(1.01) perspective(10px) translateZ(0); */
    transform: scale(1);

    /* transform: translate(10px, -10px); */
    /* transform: translateX(10) translateY(10); */

    transition: all 0.3s ease-in-out;
  }

  /* margin-bottom: 2rem; */
  /* &:last-child {
    margin-bottom: 0;
  } */
`
export const CardProperActive = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--color1-main);
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color4-shadow);
  padding: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  left: 30%;
  top: 10%;
  max-width: 40vw;
  min-width: 300px;
  @media (max-width: 680px) {
    z-index: 10;
    max-width: 80vw;
    left: 20px;
    top: 20px;
  }
`

export const CardH3 = styled.p`
  margin: 1.5rem;
  font-size: 1.25rem;
`
export const CardImage = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  min-height: 100%;
  /* min-height: 240px; */
  /* max-width: 100%; */
  object-fit: cover;
  /* will-change: transform; */
  /* -webkit-backface-visibility: hidden; */
  /* -ms-transform: translateZ(0);  */
  /* -webkit-transform: translateZ(0);  */
  /* transform: translateZ(0); */
  /* backface-visibility: hidden; */
  width: 100%;
  & ~ * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
export const CardP = styled.p`
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  min-width: 90%;
`

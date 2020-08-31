import styled from "styled-components";
export const LinkAbout = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: var(--color3-shadow);
  fill: var(--color2-secondary);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  &:hover {
    background: var(--color3-shadow);
    color: #050801;
    box-shadow: 0 0 5px var(--color3-shadow), 0 0 25px var(--color3-shadow),
      0 0 50px var(--color3-shadow), 0 0 200px var(--color3-shadow);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
export const ContainerBoxSecond = styled.div`
  position: relative;
  width: 1280px;
  min-width: 1280px;

  min-height: 860px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 660px) {
    min-width: 280px;

    min-height: 260px;
    width: 300px;
    height: 680px;
  }
  @media screen and (min-width: 660px) and (max-width: 1290px) {
    width: 300px;
    height: 860px;
    min-width: 680px;

    min-height: 680px;
  }
`;
export const GridCenter = styled.div`
  min-width: fit-content;
  display: grid;

  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 100px;
  @media screen and (min-width: 760px) and (max-width: 1290px) {
    column-gap: 10px;
  }

  @media screen and (max-width: 760px) {
    display: grid;

    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;

    justify-content: center;
  }
`;

export const ContainerBox = styled.div`
  transform: translateX(-120%);
  margin: 0 auto;
  padding: 0;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ContainerBoxShow = styled.div`
  transform: translateX(0%);
  margin: 0 auto;
  padding: 0;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1280px;
`;
export const Box = styled.div`
  /* position: relative; */
  flex: 1 1 150px;
  margin: 20px;
  height: 500px;
  background: #1e2a2d;
  min-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  transition: 0.8s;
  /* &:after {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    left: -2px;
    bottom: -2px;
    background: #babaca;
    transform: skew(-2deg, -2.5deg);
    z-index: -1;
  } */

  &:hover {
    transition: 0.8s;
    transition-delay: 0.2s;

    background: var(--color2-main);
    color: #050801;
    box-shadow: 0 0 5px var(--color3-shadow), 0 0 25px var(--color3-shadow),
      0 0 50px var(--color3-shadow), 0 0 200px var(--color3-shadow);
  }
  /* box-shadow: 0 0 5px #f5dcdc, 0 0 25px #f5dcdc, 0 0 50px #f5dcdc,
      0 0 200px #03e9f4; */
`;

export const ContentBox = styled.div`
  position: absolute;

  margin: 0 30px 0;
`;
export const ContentH2 = styled.h2`
  position: absolute;
  top: -40px;
  right: 25px;
  margin: 0;
  padding: 0;
  fill: var(--color2-secondary);
  font-size: 1em;
  color: var(--color2-secondary);
  transition: 0.7s;
  ${Box}:hover & {
    top: -70px;
    right: 10px;
    color: var(--color1-secondary);
    fill: var(--color1-secondary);
  }
`;
export const ContentH3 = styled.h2`
  margin: 0 0 10px;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #babaca;
`;
export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  color: #babaca;
  font-size: 16px;
`;
export const Link = styled.a`
  position: relative;
  margin: 20px 0 0;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #babaca;
  display: inline-block;
  color: #babaca;
  transition: 0.5s;
  transform: translateY(-30px);
  opacity: 0;
  visibility: hidden;
  ${Box}:hover & {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
  &:hover {
    color: #000;
    background: #babaca;
  }
`;

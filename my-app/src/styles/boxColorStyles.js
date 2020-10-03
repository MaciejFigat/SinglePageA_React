import styled from "styled-components";
export const LinkAbout = styled.a`
  position: relative;
  display: grid;

  place-items: center;

  padding: 25px 30px;
  margin: 40px 0;
  min-height: 50px;
  min-width: 150px;
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
export const LinkAboutSecondary = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: var(--color4-shadow);
  fill: var(--color2-secondary);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  &:hover {
    background: var(--color4-shadow);
    color: #050801;
    box-shadow: 0 0 5px var(--color4-shadow), 0 0 25px var(--color4-shadow),
      0 0 50px var(--color4-shadow), 0 0 200px var(--color4-shadow);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
export const LinkAboutSubtle = styled.a`
  /* position: relative; */
  display: inline-block;
  /* display: grid;

  place-items: center; */
  padding: 25px 30px;
  margin: 40px 0;
  color: var(--color4-shadow);
  fill: var(--color2-secondary);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  &:hover {
    /* background: var(--color4-shadow); */
    color: var(--color3-shadow);
    opacity: 0.7;
    /* text-shadow: 0 0 5px var(--color2-secondary); */
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */
  }
`;
export const LinkPartners = styled.a`
  display: inline-block;

  margin: 0 auto;
  color: var(--color4-shadow);
  fill: var(--color2-secondary);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 2px;
  overflow: hidden;

  &:hover {
    color: var(--color1-secondary);
    fill: var(--color1-secondary);
    opacity: 0.9;
  }
`;
export const ContainerBoxSecond = styled.div`
  position: relative;
  width: 1280px;
  min-width: 1280px;

  min-height: 660px;
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
    height: 680px;
    min-width: 680px;

    min-height: 680px;
  }
`;
export const GridCenter = styled.div`
  min-width: fit-content;
  display: grid;
  min-height: 80vh;
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
  }
`;

export const ContainerBox = styled.div`
  overflow: hidden;
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

  justify-content: center;
  align-content: center;
  max-width: 1280px;
  height: 80vh;

  @media screen and (max-width: 400px) {
  }
  @media screen and (min-width: 400px) and (max-width: 660px) {
    width: 100vw;
    height: 80vh;
  }
  @media screen and (min-width: 660px) and (max-width: 1290px) {
    width: 100vw;
  }
`;
export const Box = styled.div`
  overflow: hidden;
  position: relative;
  flex: 1 1 150px;
  margin: 20px;
  /* overflow: hidden; */
  border-radius: 20px;
  padding-left: 30px;
  height: 500px;
  background: var(--color2-main);
  /* min-width: fit-content; */
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color3-main);
  transition: 0.8s;
  box-shadow: 13px 13px 20px var(--color2-main);
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
    /* box-shadow: 13px 13px 20px var(--color2-main); */
    /* background: var(--color3-main); */
    /* color: var(--color); */
    /* box-shadow: 0 0 5px var(--color3-shadow), 0 0 25px var(--color3-shadow),
      0 0 50px var(--color3-shadow), 0 0 200px var(--color3-shadow); */
  }

  @media screen and (min-width: 710px) and (max-width: 1290px) {
    width: 100vw;
    height: 75vh;
  }
  @media screen and (min-width: 619px) and (max-width: 709px) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 400px) and (max-width: 619px) {
    width: 100vw;
    height: 140vh;
  }
  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 180vh;
  }
`;
export const BoxSecondary = styled.div`
  flex: 1 1 150px;
  margin: 20px;
  height: 500px;
  background: #1e2a2d;
  min-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color2-secondary);
  transition: 0.8s;

  &:hover {
    transition: 0.8s;
    transition-delay: 0.2s;

    /* background: var(--color3-main); */

    box-shadow: 0 0 5px var(--color4-shadow), 0 0 25px var(--color4-shadow),
      0 0 50px var(--color4-shadow), 0 0 200px var(--color4-shadow);
  }
`;

export const ContentBox = styled.div`
  position: absolute;

  margin: 0 30px 0;
`;
export const ContentH2 = styled.h2`
  position: absolute;
  cursor: pointer;
  /* top: 10px; */
  right: 10%;
  margin: 0;
  padding: 0;
  fill: var(--color2-secondary);
  font-size: 2em;
  /* color: var(--color2-secondary); */
  transition: 0.7s;
  &:hover {
    fill: var(--color1-secondary);
  }
  /* ${Box}:hover & {
    
    color: var(--color1-secondary);
    fill: var(--color2-secondary);
  }
  ${BoxSecondary}:hover & {
   
    color: var(--color2-secondary);
    fill: var(--color2-secondary);
  } */
  @media screen and (max-width: 400px) {
    /* display: none; */
    /* top: -50px;
    right: 15px; */
  }
`;
export const ContentH3 = styled.h2`
  margin: 0 0 10px;
  padding: 0;

  @media screen and (max-width: 400px) {
    overflow: hidden;
  }
`;
export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;
export const Link = styled.a`
  margin: 20px 0 0;
  padding: 10px 20px;
  border-radius: 5px;

  max-width: fit-content;

  text-decoration: none;
  border: 1px solid var(--color2-secondary);
  display: inline-block;

  transition: 0.5s;
  /* transform: translateY(-30px); */
  opacity: 0.5;
  /* visibility: hidden; */
  ${Box}:hover & {
    /* transform: translateY(0px); */
    opacity: 1;
    visibility: visible;
  }
  &:hover {
    background: var(--color1-main);
  }
`;
export const Link2 = styled.a`
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* font-size: 20px; */
  font-weight: 700;
  /* font-family: "Lato", sans-serif; */
  /* color: #fff; */
  text-align: center;
  background: var(--color2-main);
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  transition: 0.5s;
`;

export const LinkLogo = styled.a`
  display: inline-block;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  /* color: var(--color4-shadow); */
  fill: var(--color2-secondary);
  overflow: hidden;
  max-width: fit-content;
  &:hover {
    /* color: var(--color1-secondary); */
    fill: var(--color1-secondary);
    opacity: 0.7;
  }
`;
// var(--color1-secondary) !important;

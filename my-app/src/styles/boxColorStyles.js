import styled from "styled-components";
export const LinkAbout = styled.a`
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
export const ContainerBoxSecond = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  background: #ecf0f3;
`;
export const ContainerBox = styled.div`
  margin: 0 auto;
  padding: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  min-height: 50vh;
  position: relative;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 0 40px;
  grid-template-rows: auto;
`;
export const Box = styled.div`
  position: relative;
  height: 500px;
  background: #1e2a2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  &:after {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    left: -2px;
    bottom: -2px;
    background: #babaca;
    transform: skew(-2deg, -2.5deg);
    z-index: -1;
  }
`;

export const ContentBox = styled.div`
  position: absolute;

  margin: 0 10px 0;
`;
export const ContentH2 = styled.h2`
  position: absolute;
  top: -60px;
  right: 20px;
  margin: 0;
  padding: 0;

  font-size: 8em;
  color: rgba(255, 255, 255, 0.02);
  transition: 0.4s;
  ${Box}:hover & {
    top: -90px;
    right: -15px;
    color: rgba(255, 255, 255, 0.07);
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

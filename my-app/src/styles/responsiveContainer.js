import styled from "styled-components";
import px2vw from "../utilities/px2vw";
export const BigContainerDiv = styled.div`
  margin-bottom: 60px;
`;
export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid var(--color3-main);
  border-radius: 10px;
  padding: 10px 20px;
  background: var(--color2-main);
  margin: 20px;
  box-shadow: 13px 13px 20px var(--color2-main);

  font-size: ${px2vw(24)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(16)};
  }
`;
export const ContainerLogos = styled.div`
  display: grid;
  place-items: center;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr;
  row-gap: 60px;
  @media (max-width: 1024px) {
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
`;

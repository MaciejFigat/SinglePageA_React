import styled from "styled-components";
import px2vw from "../utilities/px2vw";
export const BigContainerDiv = styled.div`
  margin-bottom: 40px;
`;
export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid var(--color3-main);
  border-radius: 10px;
  padding: 10px 20px;
  background: var(--color2-main);
  margin: 20px;
  margin-bottom: 30px;
  font-size: ${px2vw(24)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(16)};
  }
`;

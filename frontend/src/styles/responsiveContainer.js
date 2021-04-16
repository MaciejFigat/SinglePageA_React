import styled from 'styled-components'
import px2vw from '../utilities/px2vw'
export const BigContainerDiv = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 60px;
`

export const ContainerDiv = styled.div`
  display: grid;
  place-items: center;
`
export const WrapperDiv = styled.div`
  display: grid;
  place-items: left;

  width: 80%;
`

export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border: 1px solid var(--color3-main);
  border-radius: 10px;
  width: 80%;
  padding: 40px 50px 20px;

  background: ${(props) => props.theme.linearGradientSecondary};

  margin-top: ${px2vw(16)};

  font-size: ${px2vw(14)};

  @media (max-width: 1024px) {
    font-size: ${px2vw(20)};
    margin: ${px2vw(12)};
    padding: 20px 20px 20px;
  }
  @media (max-width: 768px) {
    font-size: ${px2vw(30)};
    margin: ${px2vw(8)};
    width: 85%;
    padding: 10px 10px 10px;
  }
`
export const ContainerLogos = styled.div`
  display: grid;
  place-items: center;

  grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr;
  row-gap: 60px;
  @media (max-width: 1024px) {
    grid-template: 1fr 1fr / 1fr 1fr;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
  }
`
export const LinkOne = styled.a`
  margin: 20px 0px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  min-width: fit-content;
  text-decoration: none;
  border: 1px solid var(--color2-secondary);
  transition: 0.5s;
  transform: translateY(-5px);
  background: ${(props) => props.theme.linearGradientSecondary};
  ${ResponsiveDiv}:hover & {
    transform: translateY(0px);
    transition: 0.5s;
  }
  &:hover {
    color: var(--color1-secondary) !important;
  }
`
export const H2 = styled.h4`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem;
  padding: 0;
  fill: var(--color2-secondary);
  font-size: 1.5em;
  transition: 0.7s;
  &:hover {
    fill: var(--color1-secondary);
    color: var(--color3-shadow);
    opacity: 0.7;
    transition: 0.7s;
  }

  @media (max-width: 1024px) {
    height: 33px important!;
    width: 33px important!;
  }
  @media (max-width: 768px) {
    height: 22px important!;
    width: 22px important!;
  }
`
export const H2Bottom = styled(H2)`
  position: absolute;
  top: 0;
  margin-top: 1rem;

  right: 1rem;
`

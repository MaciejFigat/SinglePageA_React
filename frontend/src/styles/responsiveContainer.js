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
export const ResponsiveDiv = styled.div`
  display: grid;
  place-items: left;
  border: 1px solid var(--color3-main);
  border-radius: 10px;
  width: 80%;
  padding: 40px 50px 20px;

  background: var(--color2-main);
  margin-top: ${px2vw(16)};
  box-shadow: 13px 13px 20px var(--color2-main);

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
`
export const LinkOne = styled.a`
  margin: 20px 0px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: fit-content;
  text-decoration: none;
  border: 1px solid var(--color2-secondary);
  display: inline-block;
  transition: 0.5s;
  transform: translateY(-10px);
  opacity: 0.1;

  ${ResponsiveDiv}:hover & {
    transform: translateY(0px);
    opacity: 1;
    transition: 0.5s;
  }
  &:hover {
    background: var(--color1-main);
  }
`
export const H2 = styled.h2`
  position: absolute;
  cursor: pointer;
  bottom: 1rem;
  right: 1rem;
  margin: 0;
  padding: 0;
  fill: var(--color2-secondary);
  font-size: 2em;

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

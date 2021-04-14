import styled from 'styled-components'

export const CardPopupActive = styled.div`
  display: grid;
  place-items: center;
  background: var(--background4-main);
  border-radius: 0.5rem;
  padding: 1rem;
  padding-bottom: 1rem;
  position: fixed;
  left: 30%;
  top: 15%;
  max-width: 40vw;
  min-width: 700px;
  @media (min-width: 880px) and (max-width: 1070px) {
    left: 15%;
  }
  @media (min-width: 770px) and (max-width: 880px) {
    left: 5%;
  }

  @media (max-width: 770px) {
    z-index: 10;
    min-width: 300px;
    max-width: 80vw;
    left: 3%;
    top: 10%;
  }
`

export const CardPopupH3 = styled.h3`
  /* margin: 1.5rem; */
  margin: 2rem 0 1rem 2rem;

  font-size: 1.55rem;
`
export const CardPopupPWrapper = styled.div`
  display: grid;
  place-items: left;
`
export const CardPopupP = styled.p`
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 1rem;
  min-width: fit-content;
`
export const H2Popup = styled.h4`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem;
  margin-top: 0.5rem;
  padding: 0;
  font-size: 1.5em;

  transition: 0.7s;
  &:hover {
    fill: var(--color3-secondary);
    color: var(--color3-secondary);
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
export const LinkPopup = styled.a`
  margin: 20px 0px 20px;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: fit-content;
  text-decoration: none;
  border: 1px solid var(--color2-secondary);
  transition: 0.4s;
  background: ${(props) => props.theme.linearGradientSecondary};
  &:hover {
    color: var(--color1-secondary) !important;
    transition: 0.4s;
    border: 1px solid var(--color1-secondary);
  }
`
export const StyledImagePopup = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  border-radius: 5px;
`

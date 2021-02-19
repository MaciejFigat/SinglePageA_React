import React from 'react'
import { Paragraph } from '../styles/boxColorStyles'
import {
  ResponsiveDiv,
  BigContainerDiv,
  LinkOne,
  H2,
} from '../styles/responsiveContainer'
import { StyledImage } from '../styles/imageStyles'
import saw1 from '../assets/saw1.jpg'
import saw2 from '../assets/saw2.jpg'
import saw3 from '../assets/saw3.jpg'
import mountain2 from '../assets/mountain2.jpg'
const OfferOne = ({ handleClickOne }) => {
  return (
    <BigContainerDiv>
      <ResponsiveDiv>
        <H2 onClick={handleClickOne}>
          <i className='fas fa-chevron-circle-left'></i>
        </H2>
        <StyledImage src={mountain2} width='80%' height='80%' />
        <h4>Znaczenie dla zdrowia</h4> <br />
        <Paragraph>
          Zbyt wysokie stężenie CO2 w powietrzu bezpośrednio wpływa na
          pojawienie się uczucia zmęczenia, obniżenie koncentracji oraz
          percepcji. Przy wartościach powyżej 2500ppm jest niebezpieczna dla
          zdrowia.
        </Paragraph>
        <Paragraph>
          Wentylacja grawitacyjna, w budownictwie mieszkalnym, oraz mechaniczna
          np. w biurowcach, ma za zadanie dostarczyć powietrze odpowiedniej
          jakości dla użytkowników pomieszczeń.
        </Paragraph>
        <Paragraph>
          Poza profesjonalnym montażem, niezbędne jest dokonywanie okresowych
          przeglądów, serwisów i pomiarów systemów wentylacyjnych.
        </Paragraph>
        <Paragraph>
          Dodatkowe zagrożenie stanowią bakterie i grzyby. Mogą one znajdować
          się w zabrudzonych przewodach wentylacyjnych. Może to być przyczynkiem
          wielu groźnych chorób płuc, skóry, oczu, a nawet sprzyjać powstawaniu
          nowotworów.
        </Paragraph>
        <LinkOne href='#' onClick={handleClickOne}>
          Powrót
        </LinkOne>
      </ResponsiveDiv>
    </BigContainerDiv>
  )
}
const OfferTwo = ({ handleClickTwo }) => {
  return (
    <BigContainerDiv>
      <ResponsiveDiv>
        <H2 onClick={handleClickTwo}>
          <i className='fas fa-chevron-circle-left'></i>
        </H2>
        <StyledImage src={saw1} width='66%' height='66%' />
        <StyledImage src={saw2} width='66%' height='66%' />
        <StyledImage src={saw3} width='66%' height='66%' />
        <Paragraph>Common Merganser</Paragraph> <br />
        <Paragraph>
          The common merganser or goosander is a large seaduck of rivers and
          lakes in forested areas of Europe, the northern and central
          Palearctic, and North America. The common merganser eats fish and
          nests in holes in trees.
        </Paragraph>
        <LinkOne href='#' onClick={handleClickTwo}>
          Powrót
        </LinkOne>
      </ResponsiveDiv>
    </BigContainerDiv>
  )
}

export { OfferTwo, OfferOne }

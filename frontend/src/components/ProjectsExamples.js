import React from 'react'
import {
  // ResponsiveDiv,
  BigContainerDiv,
  LinkOne,
  ContainerDiv,
} from '../styles/responsiveContainer'

import {
  CardP,
  CardProper,
  CardWrapper,
  CardH3,
  // CardImage,
  StyledImage,
} from '../styles/imageStyles'
// import { installationData } from '../data/installationAC'
import { data } from '../data/projectsExamples'
import rulerBlueprint from '../assets/plans/rulerBlueprint.jpg'

const Projects = ({ handleClickHome }) => {
  return (
    <BigContainerDiv>
      <ContainerDiv>
        <CardWrapper>
          {' '}
          <CardProper>
            <StyledImage
              width='100%'
              height='80%'
              src={rulerBlueprint}
              alt='ruler on a blueprint'
            />
            <CardH3>Przykładowe projekty instalacji</CardH3>
          </CardProper>
          {data.map((installation) => (
            <CardProper key={installation.id.toString()}>
              <StyledImage
                width='100%'
                height='75%'
                src={installation.picture}
              />
              <CardH3>{installation.title}</CardH3>
              <CardP>{installation.description}</CardP>
            </CardProper>
          ))}
          <CardProper>
            <CardH3>
              <LinkOne onClick={handleClickHome}>
                {' '}
                Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
              </LinkOne>
            </CardH3>
          </CardProper>
        </CardWrapper>
      </ContainerDiv>{' '}
    </BigContainerDiv>
  )
}

export { Projects }

// <h4>Znaczenie dla zdrowia</h4> <br />
//         <Paragraph>
//           Zbyt wysokie stężenie CO2 w powietrzu bezpośrednio wpływa na
//           pojawienie się uczucia zmęczenia, obniżenie koncentracji oraz
//           percepcji. Przy wartościach powyżej 2500ppm jest niebezpieczna dla
//           zdrowia.
//         </Paragraph>
//         <Paragraph>
//           Wentylacja grawitacyjna, w budownictwie mieszkalnym, oraz mechaniczna
//           np. w biurowcach, ma za zadanie dostarczyć powietrze odpowiedniej
//           jakości dla użytkowników pomieszczeń.
//         </Paragraph>
//         <Paragraph>
//           Poza profesjonalnym montażem, niezbędne jest dokonywanie okresowych
//           przeglądów, serwisów i pomiarów systemów wentylacyjnych.
//         </Paragraph>
//         <Paragraph>
//           Dodatkowe zagrożenie stanowią bakterie i grzyby. Mogą one znajdować
//           się w zabrudzonych przewodach wentylacyjnych. Może to być przyczynkiem
//           wielu groźnych chorób płuc, skóry, oczu, a nawet sprzyjać powstawaniu
//           nowotworów.
//         </Paragraph>
//         <LinkOne href='#' onClick={handleClickOne}>
//           Powrót
//         </LinkOne>

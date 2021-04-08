import React, { useState } from 'react'
import { BigContainerDiv } from '../styles/responsiveContainer'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
  LinkPopup,
} from '../styles/popupCard'
import {
  CardProper,
  CardWrapper,
  CardH3,
  CardImage,
  StyledImage,
} from '../styles/imageStyles'
import AnimationWrapper from '../animations/AnimationWrapper'
import { data } from '../data/projectsExamples'
import rulerBlueprint from '../assets/plans/rulerBlueprint.jpg'

const Projects = ({ handleClickHome }) => {
  const [showExamples, setShowExamples] = useState(false)
  const [examples, setExamples] = useState({
    exampleTitle: null,
    example1: null,
    example2: null,
    example3: null,
    example4: null,
    example5: null,
  })
  const {
    exampleTitle,
    example1,
    example2,
    example3,
    example4,
    example5,
  } = examples
  const showExamplesHandler = (e) => {
    e.preventDefault()
    if (showExamples === true) {
      setShowExamples(false)
    } else {
      setShowExamples(true)
    }
  }
  return (
    <BigContainerDiv>
      <CardWrapper>
        <CardProper>
          <StyledImage
            width='100%'
            height='79%'
            src={rulerBlueprint}
            alt='ruler on a blueprint'
          />
          <CardH3>Przykładowe projekty instalacji</CardH3>
        </CardProper>
        {data.map((installation) => (
          <div
            key={installation.id.toString()}
            onClick={() =>
              setExamples({
                exampleTitle: installation.title,
                example1: installation.description,
                example2: installation.description2,
                example3: installation.description3,
                example4: installation.description4,
                example5: installation.description5,
              })
            }
          >
            <CardProper onClick={showExamplesHandler}>
              <CardImage src={installation.picture} alt='mountain' />

              <CardH3>{installation.title}</CardH3>
            </CardProper>
          </div>
        ))}
        {showExamples === true && (
          <AnimationWrapper>
            <CardPopupActive>
              <H2Popup onClick={showExamplesHandler}>
                <i className='fas fa-times'></i>
              </H2Popup>
              <CardPopupH3>{exampleTitle}</CardPopupH3>
              {example1 && <CardPopupP>{example1}</CardPopupP>}
              {example2 && <CardPopupP>{example2}</CardPopupP>}
              {example3 && <CardPopupP>{example3}</CardPopupP>}
              {example4 && <CardPopupP>{example4}</CardPopupP>}
              {example5 && <CardPopupP>{example5}</CardPopupP>}
            </CardPopupActive>
          </AnimationWrapper>
        )}
      </CardWrapper>{' '}
      <LinkPopup onClick={handleClickHome}>
        {' '}
        Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
      </LinkPopup>
    </BigContainerDiv>
  )
}

export { Projects }
// <StyledImage width='100%' height='75%' src={installation.picture} />
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

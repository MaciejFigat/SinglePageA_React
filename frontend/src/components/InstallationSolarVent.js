import React, { useState } from 'react'
import AnimationWrapper from '../animations/AnimationWrapper'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
} from '../styles/popupCard'
import { BigContainerDiv, LinkOne } from '../styles/responsiveContainer'
import {
  CardP,
  CardProper,
  CardH3,
  CardWrapper,
  CardImage,
} from '../styles/imageStyles'
import { installationData } from '../data/installationSolarVent'

import PipesVent from '../assets/AC/PipesVent.jpg'
const InstallationSolarVent = ({ handleClickHome }) => {
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
        {' '}
        <CardProper>
          <CardImage src={PipesVent} />
          <CardH3>Przykładowe instalacje</CardH3>
          <CardP>wykonane w latach 2013-2020</CardP>
        </CardProper>
        {installationData.map((installation) => (
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
            <CardProper
              key={installation.id.toString()}
              onClick={showExamplesHandler}
            >
              <CardImage src={installation.picture} />
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
      <LinkOne onClick={handleClickHome}>
        {' '}
        Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
      </LinkOne>
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

// <CardImage src={installation.picture} />

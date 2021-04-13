import React, { useState } from 'react'
import AnimationWrapper from '../animations/AnimationWrapper'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
  LinkPopup,
} from '../styles/popupCard'
import { BigContainerDiv } from '../styles/responsiveContainer'
import {
  CardProper,
  CardH3,
  CardWrapper,
  CardImage,
  StyledImage,
  DivCardWrap,
} from '../styles/imageStyles'
import VentCeiling from '../assets/AC/VentCeiling.jpg'

const InstallationSolarVent = ({ handleClickHome, installationData }) => {
  const [showExamples, setShowExamples] = useState(false)
  const [examples, setExamples] = useState({
    exampleTitle: null,
    examplePicture: null,
    example1: null,
    example2: null,
    example3: null,
    example4: null,
    example5: null,
  })
  const {
    exampleTitle,
    examplePicture,
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
        {installationData.map((installation) => (
          <DivCardWrap
            key={installation.id.toString()}
            onClick={() =>
              setExamples({
                exampleTitle: installation.title,
                examplePicture: installation.picture,
                example1: installation.description,
                example2: installation.description2,
                example3: installation.description3,
                example4: installation.description4,
                example5: installation.description5,
              })
            }
          >
            <CardProper onClick={showExamplesHandler}>
              {installation.pictureCropped ? (
                <CardImage
                  src={installation.pictureCropped}
                  alt='picture of an installation example'
                />
              ) : (
                <CardImage
                  src={installation.picture}
                  alt='picture of an installation example'
                />
              )}
              <CardH3>{installation.title}</CardH3>
            </CardProper>
          </DivCardWrap>
        ))}
        <CardProper>
          <StyledImage width='100%' height='72%' src={VentCeiling} />
          <LinkPopup onClick={handleClickHome}>
            {' '}
            Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
          </LinkPopup>
        </CardProper>
        {showExamples === true && (
          <AnimationWrapper>
            <CardPopupActive>
              <H2Popup onClick={showExamplesHandler}>
                <i className='fas fa-times'></i>
              </H2Popup>
              <CardPopupH3>{exampleTitle}</CardPopupH3>
              <StyledImage width='90%' height='70%' src={examplePicture} />
              {example1 && <CardPopupP>{example1}</CardPopupP>}
              {example2 && <CardPopupP>{example2}</CardPopupP>}
              {example3 && <CardPopupP>{example3}</CardPopupP>}
              {example4 && <CardPopupP>{example4}</CardPopupP>}
              {example5 && <CardPopupP>{example5}</CardPopupP>}
            </CardPopupActive>
          </AnimationWrapper>
        )}
      </CardWrapper>{' '}
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

// <CardImage src={installation.picture} />

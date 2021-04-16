import React, { useState } from 'react'
import AnimationWrapper from '../animations/AnimationWrapper'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
  LinkPopup,
  StyledImagePopup,
  CardPopupPWrapper,
  // PopupOverlay,
} from '../styles/popupCard'
import { BigContainerDiv } from '../styles/responsiveContainer'
import {
  CardProper,
  CardH3,
  CardWrapper,
  StyledImage,
} from '../styles/imageStyles'

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

  // {showExamples === true && (
  //   <PopupOverlay onClick={showExamplesHandler}></PopupOverlay>
  // )}
  return (
    <BigContainerDiv>
      <div
        className={`overlayDiv ${showExamples}`}
        onClick={showExamplesHandler}
      ></div>
      <CardWrapper>
        {' '}
        {installationData.map((installation) => (
          <div
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
            {installation.link === true ? (
              <CardProper>
                <StyledImage
                  width='100%'
                  height='100%'
                  src={installation.picture}
                  alt='picture of an installation example'
                />
                <LinkPopup onClick={handleClickHome}>
                  {' '}
                  Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
                </LinkPopup>
              </CardProper>
            ) : (
              <CardProper onClick={showExamplesHandler}>
                {installation.pictureCropped ? (
                  <StyledImage
                    width='100%'
                    height='100%'
                    src={installation.pictureCropped}
                    alt='picture of an installation example'
                  />
                ) : (
                  <StyledImage
                    width='100%'
                    height='100%'
                    src={installation.picture}
                    alt='picture of an installation example'
                  />
                )}
                <CardH3>{installation.title}</CardH3>
              </CardProper>
            )}
          </div>
        ))}
        {showExamples === true && (
          <AnimationWrapper>
            <CardPopupActive>
              <H2Popup onClick={showExamplesHandler}>
                <i className='fas fa-times'></i>
              </H2Popup>
              <CardPopupH3>{exampleTitle}</CardPopupH3>
              <StyledImagePopup src={examplePicture} />
              <CardPopupPWrapper>
                {example1 && <CardPopupP>{example1}</CardPopupP>}
                {example2 && <CardPopupP>{example2}</CardPopupP>}
                {example3 && <CardPopupP>{example3}</CardPopupP>}
                {example4 && <CardPopupP>{example4}</CardPopupP>}
                {example5 && <CardPopupP>{example5}</CardPopupP>}
              </CardPopupPWrapper>
            </CardPopupActive>
          </AnimationWrapper>
        )}
      </CardWrapper>{' '}
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

import React, { useState } from 'react'
import { BigContainerDiv, WrapperDiv } from '../styles/responsiveContainer'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
} from '../styles/popupCard'
import { StyledImageAlt, CardProper, StyledImage } from '../styles/imageStyles'
import { installationData } from '../data/installationAC'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import AnimationWrapper from '../animations/AnimationWrapper'

const InstallationAC = () => {
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
      <WrapperDiv>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
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
                <CardProper onClick={showExamplesHandler}>
                  <StyledImageAlt
                    width='100%'
                    height='100%'
                    src={installation.picture}
                  />
                </CardProper>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
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
      </WrapperDiv>
    </BigContainerDiv>
  )
}

export default InstallationAC

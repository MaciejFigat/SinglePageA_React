import React, { useState } from 'react'
import { LinkPartners } from '../styles/boxColorStyles'
import {
  CardWrapper,
  CardProper,
  CardImage,
  WrapperCentringDiv,
  StyledImage,
} from '../styles/imageStyles'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
} from '../styles/popupCard'

import AnimationWrapper from '../animations/AnimationWrapper'
import { techData } from '../data/techPartnersData'

const AllTech = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [partnerName, setPartnerName] = useState({
    name: 'none',
    picture: null,
    logo: React.FC,
    motto: '',
    description: '',
    link: '#',
  })
  const { name, picture, motto, description, link } = partnerName

  const showDetailsHandler = (e) => {
    e.preventDefault()
    if (showDetails === true) {
      setShowDetails(false)
    } else {
      setShowDetails(true)
    }
  }
  return (
    <AnimationWrapper>
      <WrapperCentringDiv>
        <CardWrapper>
          {techData.map((partner) => (
            <div
              key={partner.name}
              onClick={() =>
                setPartnerName({
                  name: partner.name,
                  picture: partner.picture,
                  motto: partner.motto,
                  description: partner.description,
                  link: partner.link,
                })
              }
            >
              <CardProper onClick={showDetailsHandler}>
                <StyledImage width='100%' height='100%' src={partner.picture} />
                <LinkPartners>{partner.logo}</LinkPartners>
              </CardProper>
            </div>
          ))}{' '}
          {showDetails === true && (
            <AnimationWrapper>
              <CardPopupActive>
                <H2Popup onClick={showDetailsHandler}>
                  <i className='fas fa-times'></i>
                </H2Popup>
                <StyledImage
                  width='90%'
                  height='100%'
                  src={picture}
                  alt='logo picture'
                />

                <CardPopupH3>{motto}</CardPopupH3>
                <CardPopupP>{description}</CardPopupP>
                <CardPopupP>
                  <LinkPartners href={link}>
                    <i className='fas fa-link'></i>
                    {name}
                  </LinkPartners>
                </CardPopupP>
              </CardPopupActive>
            </AnimationWrapper>
          )}
        </CardWrapper>
      </WrapperCentringDiv>
    </AnimationWrapper>
  )
}

export { AllTech }

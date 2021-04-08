import React, { useState } from 'react'
import { LinkPartners } from '../styles/boxColorStyles'
import {
  CardWrapper,
  CardProper,
  CardImage,
  WrapperCentringDiv,
} from '../styles/imageStyles'
import {
  H2Popup,
  CardPopupP,
  CardPopupH3,
  CardPopupActive,
} from '../styles/popupCard'
import mountain2 from '../assets/sunset2.jpg'
import AnimationWrapper from '../animations/AnimationWrapper'
import { techData } from '../data/techPartnersData'

const AllTech = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [partnerName, setPartnerName] = useState({
    name: 'none',
    logo: React.FC,
    motto: '',
    description: '',
    link: '#',
  })
  const { name, motto, description, link } = partnerName

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
                  motto: partner.motto,
                  description: partner.description,
                  link: partner.link,
                })
              }
            >
              <CardProper onClick={showDetailsHandler}>
                <CardImage src={mountain2} alt='mountain' />

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

                <CardImage height='85%' src={mountain2} alt='mountain' />

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

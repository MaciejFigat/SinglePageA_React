import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Paragraph, LinkPartners, LinkLogo } from '../styles/boxColorStyles'
import {
  ResponsiveDiv,
  BigContainerDiv,
  LinkOne,
  H2,
} from '../styles/responsiveContainer'
import {
  CardWrapper,
  CardProper,
  CardImage,
  CardH3,
} from '../styles/imageStyles'
import mountain2 from '../assets/sunset1.jpg'
import FujiElectric from './svg/FujiElectric'
import Daikin from './svg/Daikin'
import Fujitsu from './svg/Fujitsu'
import Gree from './svg/Gree'
import Lg from './svg/Lg'
import Mitsubishi from './svg/Mitsubishi'
import Panasonic from './svg/Panasonic'
import Samsung from './svg/Samsung'
import { techData } from '../data/techPartnersData'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
  },
}
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}
const AllTech = () => {
  const [partnersShow, setPartnersShow] = useState('showNone')
  const [partnerName, setPartnerName] = useState({
    name: 'none',
    logo: '',
    motto: '',
    description: '',
    link: '#',
  })

  const clickBackHandler = () => {
    // setPartnersShow('showNone')
    setPartnerName({
      name: 'none',
      logo: '',
      motto: '',
      description: '',
      link: '#',
    })
  }
  const clickPartnerHandler = (partner) => {
    setPartnerName({
      name: partner.name,
      motto: partner.motto,
      description: partner.decription,
      logo: partner.name,
      link: partner.link,
    })
  }

  //   (partnerName.name === 'none')
  //  (partnersShow === 'showNone')
  return (
    <>
      {partnerName.name === 'none' && (
        <CardWrapper>
          {techData.map((partner) => (
            <CardProper key={partner.name}>
              <CardImage src={mountain2} alt='mountain' />
              <CardH3>{partner.name}</CardH3>
              <LinkPartners
                onClick={() =>
                  // clickPartnerHandler(
                  //   partner.name,
                  //   partner.motto,
                  //   partner.decription,
                  //   partner.name,
                  //   partner.link
                  // )
                  setPartnerName({
                    name: partner.name,
                    motto: partner.motto,
                    description: partner.decription,
                    logo: partner.name,
                    link: partner.link,
                  })
                }
              >
                {partner.logo}
              </LinkPartners>
            </CardProper>
          ))}
        </CardWrapper>
      )}
      {partnerName.name !== 'none' && (
        <BigContainerDiv>
          <ResponsiveDiv>
            <H2 onClick={clickBackHandler}>
              <i className='fas fa-chevron-circle-left'></i>
            </H2>
            <LinkLogo href={partnerName.link}>{partnerName.logo}</LinkLogo>
            <h4>
              <Paragraph>{partnerName.motto}</Paragraph>
            </h4>{' '}
            <br />
            <Paragraph>{partnerName.description}</Paragraph>
          </ResponsiveDiv>
        </BigContainerDiv>
      )}
    </>
  )
}

export { AllTech }

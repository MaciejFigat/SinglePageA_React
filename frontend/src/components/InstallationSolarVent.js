import React from 'react'
import {
  BigContainerDiv,
  LinkOne,
  WrapperDiv,
} from '../styles/responsiveContainer'
import {
  // StyledImage,
  CardP,
  CardProper,
  CardH3,
  CardWrapper,
  CardImage,
} from '../styles/imageStyles'
// import { LinkPartners } from '../styles/boxColorStyles'
import { installationData } from '../data/installationSolarVent'
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const InstallationSolarVent = ({ handleClickHome }) => {
  return (
    <BigContainerDiv>
      <WrapperDiv>
        <CardWrapper>
          {' '}
          <CardProper>
            <CardH3>Przykładowe wykonane instalacje </CardH3>
          </CardProper>
          {installationData.map((installation) => (
            <CardProper key={installation.id.toString()}>
              <CardImage src={installation.picture} />
              <CardH3>{installation.title}</CardH3>
              <CardP>{installation.description}</CardP>
            </CardProper>
          ))}
        </CardWrapper>
      </WrapperDiv>{' '}
      <LinkOne onClick={handleClickHome}>
        {' '}
        Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
      </LinkOne>
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

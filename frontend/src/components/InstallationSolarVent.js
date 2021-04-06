import React from 'react'
import {
  BigContainerDiv,
  LinkOne,
  WrapperDiv,
} from '../styles/responsiveContainer'
import { StyledImage, CardP, CardProper } from '../styles/imageStyles'
import { LinkPartners } from '../styles/boxColorStyles'
import { installationData } from '../data/installationSolarVent'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const InstallationSolarVent = ({ handleClickOne }) => {
  return (
    <BigContainerDiv>
      <WrapperDiv>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {installationData.map((installation) => (
              <CardProper key={installation.toString()}>
                <LinkPartners>{installation.title}</LinkPartners>
                <CardP>{installation.description}</CardP>
                <StyledImage
                  width='100%'
                  height='100%'
                  src={installation.picture}
                />
              </CardProper>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </WrapperDiv>
      <LinkOne onClick={handleClickOne}>
        {' '}
        Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
      </LinkOne>
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

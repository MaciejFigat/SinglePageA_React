import React from 'react'
import {
  ResponsiveDiv,
  BigContainerDiv,
  WrapperDiv,
  H2,
} from '../styles/responsiveContainer'
import { StyledImageAlt, CardProper } from '../styles/imageStyles'
import { installationData } from '../data/installationAC'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const InstallationAC = ({ handleClickOne }) => {
  return (
    <BigContainerDiv>
      <WrapperDiv>
        <H2 onClick={handleClickOne}>
          Powrót &nbsp;<i className='fas fa-chevron-circle-left'></i>
        </H2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {installationData.map((installation) => (
              <CardProper key={installation.toString()}>
                <StyledImageAlt
                  width='100%'
                  height='100%'
                  src={installation.picture}
                />
              </CardProper>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </WrapperDiv>
    </BigContainerDiv>
  )
}

export default InstallationAC

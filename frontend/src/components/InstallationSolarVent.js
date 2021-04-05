import React from 'react'
import { ResponsiveDiv, BigContainerDiv } from '../styles/responsiveContainer'
import { StyledImage, CardP, CardProper } from '../styles/imageStyles'
import { LinkPartners } from '../styles/boxColorStyles'
import { installationData } from '../data/installationSolarVent'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const InstallationSolarVent = () => {
  return (
    <BigContainerDiv>
      <ResponsiveDiv>
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
      </ResponsiveDiv>
    </BigContainerDiv>
  )
}

export default InstallationSolarVent

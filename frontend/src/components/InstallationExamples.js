import React from 'react'
import { installationData } from '../data/installationExamplesData'
import {
  CardP,
  CardWrapper,
  CardProper,
  CardImage,
  WrapperCentringDiv,
} from '../styles/imageStyles'
import { LinkPartners } from '../styles/boxColorStyles'

const InstallationExamples = () => {
  return (
    <WrapperCentringDiv>
      <CardWrapper>
        {installationData.map((data) => (
          <div key={data.title}>
            <CardProper>
              <CardImage src={data.picture} alt='mountain' />

              <LinkPartners>{data.title}</LinkPartners>
              <CardP>{data.description}</CardP>
            </CardProper>
          </div>
        ))}
      </CardWrapper>
    </WrapperCentringDiv>
  )
}

export default InstallationExamples

import React, { useState } from 'react'
import { Layout } from '../layout'
import AnimationWrapper from '../animations/AnimationWrapper'
import { GridCenter, LinkAboutSubtle } from '../styles/boxColorStyles'
import { BigContainerDiv } from '../styles/responsiveContainer'
import InstallationSolarVent from '../components/InstallationSolarVent'
import { projectsData } from '../data/projectsExamples'
import { installationData } from '../data/installationSolarVent'
const Home = () => {
  const [showHomeEl, setShowHomeEl] = useState('showHome')

  const handleClickInstallations = () => {
    setShowHomeEl('showInstallation')
  }
  const handleClickProjects = () => {
    setShowHomeEl('showProjects')
  }
  const handleClickHome = () => {
    setShowHomeEl('showHome')
  }
  return (
    <Layout>
      {showHomeEl === 'showHome' && (
        <AnimationWrapper>
          <BigContainerDiv>
            <GridCenter>
              <LinkAboutSubtle onClick={handleClickInstallations}>
                <h3>
                  Realizacje <i className='fas fa-gavel'></i>
                </h3>
              </LinkAboutSubtle>
              <LinkAboutSubtle onClick={handleClickProjects}>
                <h3>
                  Projekty <i className='fas fa-drafting-compass'></i>
                </h3>
              </LinkAboutSubtle>
            </GridCenter>
          </BigContainerDiv>
        </AnimationWrapper>
      )}
      {showHomeEl === 'showInstallation' && (
        <AnimationWrapper>
          <InstallationSolarVent
            handleClickHome={handleClickHome}
            installationData={installationData}
          />
        </AnimationWrapper>
      )}
      {showHomeEl === 'showProjects' && (
        <AnimationWrapper>
          <InstallationSolarVent
            handleClickHome={handleClickHome}
            installationData={projectsData}
          />
        </AnimationWrapper>
      )}
    </Layout>
  )
}

export default Home

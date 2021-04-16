import { createGlobalStyle } from 'styled-components'

import planInk from '../assets/plans/planInk.jpg'
import drawingBoard from '../assets/plans/drawingBoard.jpg'
import woodenPanel from '../assets/plans/woodenPanel.jpg'

const darkTheme = {
  text: '#CFD8DC',
  // background: '#334e68',
  background: planInk,
  backgroundNav: drawingBoard,
  backgroundHeader: woodenPanel,
  backgroundCard: woodenPanel,
  color1: '#102a43',
  color2: '#393232',
  color3: '#151515',
  color4: '#486581',
  color5: '#5F939A',
  color6: '#2e67bd',
  colorHoverLink: '#06acf1',
  colorHoverLinkSecondary: '#71ebd2',
  textColorSvg: '#CFD8DC !important',
  colorShadow1: '#03e9f4',
  colorShadow2: '#486581',
  colorShadow3: '#236677',
  colorShadow4: '#1bb9ac',
  colorShadow5: '#88b4b4',
  linearGradient: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
  linearGradientSecondary:
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  linearGradientTertiary:
    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
  linearGradientQuaternary:
    'linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88))',
  linearGradientOverlay:
    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
}
// dark blue theme

const lightTheme = {
  text: '#000',

  // background: '#ECEFF1',
  background: planInk,
  backgroundNav: drawingBoard,
  backgroundHeader: woodenPanel,
  backgroundCard: woodenPanel,
  color1: '#fafad2',
  color2: '#B0BEC5',
  color3: '#90A4AE',
  color4: '#90A4AE',
  color5: '#9c3d54',
  color6: '#4a86e0',
  colorHoverLink: '#C64756',
  colorHoverLinkSecondary: '#C64756',
  textColorSvg: '#1A1A1A !important',
  colorShadow1: '#1d6b8e',
  colorShadow2: '#1d6b8e',
  colorShadow3: '#236677',
  colorShadow4: '#1bb9ac',
  colorShadow5: '#88b4b4',
  // linearGradient:
  //   'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
  linearGradient:
    'linear-gradient(rgba(250, 250, 210, 0.5), rgba(250, 250, 210, 0.5))',
  linearGradientSecondary:
    'linear-gradient(rgba(250, 250, 210, 0.85), rgba(250, 250, 210, 0.85))',
  // 'linear-gradient(rgba(207, 216, 220, 0.7), rgba(207, 216, 220, 0.7))',
  linearGradientTertiary:
    'linear-gradient(rgba(250, 250, 210, 0.75), rgba(250, 250, 210, 0.75))',
  linearGradientQuaternary:
    'linear-gradient(rgba(250, 250, 210, 0.9), rgba(250, 250, 210, 0.9))',
  // 'linear-gradient(rgba(207, 216, 220, 0.85), rgba(207, 216, 220, 0.85))',
  linearGradientOverlay:
    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
}

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  font-family: 'Roboto Slab', serif;
  } 
body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}
:root {
  
  --color1-main: ${(props) => props.theme.color1};
  --color2-main: ${(props) => props.theme.color2};
  --color3-main: ${(props) => props.theme.color3};
  --color4-main: ${(props) => props.theme.color4};
  --color5-main: ${(props) => props.theme.color5};
  --color6-main: ${(props) => props.theme.color6};
  --color1-secondary: ${(props) => props.theme.colorHoverLink};
  --color2-secondary: ${(props) => props.theme.textColorSvg};
  --color3-secondary: ${(props) => props.theme.colorHoverLinkSecondary};
  --color4-secondary: #089eff;
  --color5-secondary: #08ecff;
  --color1-shadow: ${(props) => props.theme.colorShadow3};
  --color2-shadow: ${(props) => props.theme.colorShadow4};
  --color3-shadow: ${(props) => props.theme.colorShadow1};
  --color4-shadow: ${(props) => props.theme.colorShadow2};
  --color5-shadow: ${(props) => props.theme.colorShadow5};
  --background1-main: ${(props) => props.theme.linearGradient};
  --background2-main: ${(props) => props.theme.linearGradientSecondary};
  --background3-main: ${(props) => props.theme.linearGradientTertiary};
  --background4-main: ${(props) => props.theme.linearGradientQuaternary};
  --background-overlay: ${(props) => props.theme.linearGradientOverlay};
  a, a:link, a:visited{
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
  .svgPath {
    fill: ${(props) => props.theme.textColorSvg};
    
  }
  .svgPathLogo{
    stroke: ${(props) => props.theme.textColorSvg};
  }
  

}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

body {

   
  font-family: 'Roboto Slab', serif;
  
  font-weight: 400;
  line-height: 1.65;
  color: ${(props) => props.theme.text};
  
  
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Noto Sans",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background: ${(props) => props.theme.linearGradient}, url( ${(props) =>
  props.theme.background});
  
}
.overlayDiv {
  transition: background 0.9s ease;
  background: var(--color2-secondary);
  &.true {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--background-overlay);
   
}}

`
// background-image: url( ${(props) => props.theme.background});

// background:  ${(props) => props.theme.background};
//  background: ${(props) => props.theme.linearGradientSecondary}, url( ${(
//   props
//   ) => props.theme.backgroundHeader});
export { GlobalStyle, darkTheme, lightTheme }

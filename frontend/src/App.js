import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import './styles/App.css'
import { Home, About, Contact, Install, Technology } from './pages'
import { Nav, Footer } from './layout'
import { ThemeProvider } from 'styled-components'
import SvgThemeButton from './components/SvgThemeButton'
import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyles'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './actions/menuActions'

const App = () => {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState
  const colorMode = useSelector((state) => state.colorMode)
  const { colorScheme } = colorMode

  const handleClickMenu = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    }
  }

  const location = useLocation()

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className='app_container' onClick={handleClickMenu}>
        <Nav />
        <SvgThemeButton />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path='/install'>
              <Install />
            </Route>

            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/technology'>
              <Technology />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App

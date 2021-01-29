import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import './styles/App.css'
import { Home, About, Contact, Login, Technology } from './pages'
import { Nav, Footer } from './layout'
import { ThemeProvider } from 'styled-components'

import SvgThemeButton from './components/SvgThemeButton'

import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyles'

import { AnimatePresence } from 'framer-motion'

function App() {
  const [currentTheme, setCurrentTheme] = useState([])
  // added a function in App. js that detects prefers-color-scheme: dark, it sets theme for dark if match is detected
  const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  const useDarkMode = isDark.matches
  useEffect(() => {
    if (useDarkMode === true) {
      setCurrentTheme('dark')
    }
  }, [useDarkMode])

  const handleClickCounter = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }

  const location = useLocation()

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className='app_container'>
        <Nav />

        <div onClick={handleClickCounter}>
          <SvgThemeButton currentTheme={currentTheme} />
        </div>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path='/login'>
              <Login />
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
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

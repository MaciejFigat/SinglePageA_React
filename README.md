# SinglePageA_React

## Dark & Light themes 
styles/GlobalStyles.js contains GlobalStyle, darkTheme, lightTheme. Those are used in the whole application depending on which theme is chosen. Dark or lightTheme contain a distinct set of colors etc.
These in turn are imported into App.js that also imports and utilizes ThemeProvider which acts as a wrapper for the app. Depending on the colorScheme - useSelector hook used to bring it from the store, there is an appropriate scheme passed into the `<ThemeProvider >` wrapper. 

`<ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>`

I also bring `<GlobalStyles />` into app as a component.



SvgThemeButton component watches prefered color scheme - window.matchMedia('(prefers-color-scheme: dark)'). If it matches then useEffect changes the preffered theme to the one user has chosen.

``` const isDark = window.matchMedia('(prefers-color-scheme: dark)')
  const useDarkMode = isDark.matches
  useEffect(() => {
    if (useDarkMode === true) {
      dispatch(setColorModeDark())
    }
  }, [useDarkMode, dispatch])
```  
Also, the same component has onClick capability. Both are done by sending appropriate dispatch to the store. 

``` const handleClickColor = () => {
    if (colorScheme === 'dark') {
      dispatch(setColorModeLight())
    } else {
      dispatch(setColorModeDark())
    }
  }
```  
I refactored the code to include Redux in order to simplify the code in particular components.

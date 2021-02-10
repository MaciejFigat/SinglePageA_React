## SPA - presentational page for a company
It is a lightweight SPA meant to feature basic data about the company. It all started because I wanted to have NIP (tax identyfication number) at hand during relevant activities. So I made an app.
### Relevant features
<p>
<img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat" />
<img alt="styled-components" src="https://img.shields.io/badge/styled-components-DB7093?logo=styled-components&logoColor=white&style=flat" />
<img alt="React Router" src="https://img.shields.io/badge/React Router-CA4245?logo=React-router&logoColor=white&style=flat" />
<img alt="Redux" src="https://img.shields.io/badge/Redux-764ABC?logo=Redux&logoColor=white&style=flat" />
</p>

### Dark & Light themes 
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

### Redux for menu in mobile view and for global theme (they both follow the same pattern)

1. constants used in action types: 
 * SET_CURRENT_THEME_DARK,
 * SET_CURRENT_THEME_LIGHT 
2. actions dispatched from a component
 * setColorModeDark
 * setColorModeLight
3. reducers based on the action type dispatched:
  * ``return { colorScheme: 'dark' }``
  * ``return { colorScheme: 'light' }``
4. styled-components, which are written in JS, through useSelector, have access to colorScheme value from store.js and can use it as a variable and adjust accordingly

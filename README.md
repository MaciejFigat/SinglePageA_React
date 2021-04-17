## SPA - presentational page for an installation & projects company
It is a lightweight SPA meant to feature basic data about the company. It all started because I wanted to have NIP (tax identyfication number) at hand during relevant activities. So I made an app.
## Installation
1. cd frontend
2. npm install
3. npm start

## Structure
```
├── frontend
|   ├── build
|   ├── node_modules
|   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── src
│   │   ├── actions (Redux)
│   │   ├── animations (wrappers and transitions for framer-motion)
│   │   ├── assets (photos, graphics etc.)
│   │   ├── components (some reusable components)
|   |   |  ├──svg (svg logos)
|   │   ├── constants (for action types in Redux)
|   │   ├── layout (Burger, Footer, Nav) 
|   │   ├── pages (I import the layout and have it as a wrapper for each of the pages)
|   │   ├── reducers (Redux)
|   │   ├── styles
|   │   │   ├── svg (styles for svg components)
|   │   │   ├── styles for everything (including App.css, sass files, and styled-components)
|   │   ├── utilities (script for resizing fonts etc.)
|   │   ├── App.js
|   │   ├── index.js
|   │   ├── store.js (Redux)
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
├── README.md
```

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
4. App.js through useSelector, has access to colorScheme value from store.js and can use it as props in a Theme provider wrapper that encompasses whole application
 ``<ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>``
 ``<> Everything else goes here </>  ``
 ``</ThemeProvider>``

### Styles 
styled components example - quick and easy way to reuse StyledImage component that allows me to pass custom properties like width or height
In parent component ```<StyledImage width='30%'/>```
In StyledImage component ```width: ${(props) => (props.width ? props.width : '80%')};```


### Miscellaneous



ACHouseFacade.jpg - [Image by MICHOFF from Pixabay] (https://pixabay.com/users/michoff-10798847/)
ACFacade.jpg - [Image by Free-Photos from Pixabay] (https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1209311) 


ACBuildingFacade.jpg - [Image by Sławomir Kowalewski from Pixabay](https://pixabay.com/users/skowalewski-454517/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=455239)

PipesVent.jpg - [Image by Peter H from Pixabay] (https://pixabay.com/users/tama66-1032521/)
VentClose.jpg - [Image by PublicDomainArchive from Pixabay] (https://pixabay.com/users/publicdomainarchive-262011/)
VentRoof.jpg - [Image by Erich Westendarp from Pixabay] (https://pixabay.com/users/hpgruesen-2204343/)
ACUnitsBottomView, VentCeiling.jpg - Images by [Peggy und Marco Lachmann-Anke] (https://pixabay.com/users/peggy_marco-1553824/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4749210)

DarkTokyo - [Image by Inns-Web from Pixabay] (https://pixabay.com/users/inns-web-15647326/)


planInk.jpg - [Image by pisauikan from Pixabay] (https://pixabay.com/users/pisauikan-4552082/) 
drawingBoard - [Image by Gerd Altmann from Pixabay ] (https://pixabay.com/users/geralt-9301/)

wallconcrete - [Image by Predra6_Photos from Pixabay] () 

rulerBlueprint - [Image by Wokandapix from Pixabay] (https://pixabay.com/users/wokandapix-614097/)

paperYellow - [Image by MrsMary from Pixabay] (https://pixabay.com/users/mrsmary-4022219/)

woodenPanel - [Image by Pexels from Pixabay] (https://www.pexels.com/@pixabay)

fujitsuTower - [Image by Ensi2000 from Pixabay] (https://pixabay.com/users/2143218/)
fujiElectric - [Image by マサコ アーント from Pixabay ] (https://pixabay.com/ja/users/auntmasako-2127108/)
LGBuilding - [Image by Pexels from Pixabay] (https://www.pexels.com/@pixabay)

seoulNight - [Ethan BrookeによるPixabayからの画像 ] (https://pixabay.com/ja/users/seoulinspired-12152046/)

water, bubbles, wallMold, carbonFilter, wallMold2 - [PublicDomainPictures from Pixabay](https://pixabay.com/ja/users/publicdomainpictures-14/)
airParticles - https://pixabay.com/ja/users/arttower-5337/ [ArtTower from Pixabay]

installationDirt - [Joshua Willson from Pixabay] (https://pixabay.com/ja/users/joshua_willson-876211/)

bacteria - [nadya_il from Pixabay] (https://pixabay.com/ja/users/nadya_il-255099/)

orangeLungs - [piyapong89 from Pixabay] (https://pixabay.com/ja/users/piyapong89-7158719/)

airCooling [F.Muhammad from Pixabay](https://pixabay.com/ja/users/artisticoperations-4161274/)
airDucts - [brooklynjohn from Pixabay](https://pixabay.com/ja/users/brooklynjohn-299106/)

acUnits, acUnits2 - [elasticcomputefarm from Pixabay](https://pixabay.com/ja/users/elasticcomputefarm-1865639/)
airIn, airIn2 - [stux from Pixabay](https://pixabay.com/ja/users/stux-12364/)

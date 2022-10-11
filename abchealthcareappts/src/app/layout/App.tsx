import Catalog from '../../features/catalog/catalog';
import Header from './Header';
import {Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import { useState } from 'react';
import { Route,Link, BrowserRouter} from 'react-router-dom';
import Home from '../../features/home/Home';
import MedicineDetails from '../../features/catalog/MedicineDetails';
import AboutPage from '../../features/about/AboutPage';
import Contact from '../../features/contact/Contact';




function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode? 'dark': 'light';
  const theme= createTheme({  
    palette: {
      mode: paletteType,
      background: {
        default: paletteType==='light'? '#eaeaea' : '#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
    <Container>    
      <Route>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/catalog' element={<Catalog/>}/>
      <Route  path='/catalog/MedicineDetails' element={<MedicineDetails/>}/>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route  path='/about' element={<AboutPage/>}/>
      </Route>        
    </Container>
    </ThemeProvider>
    
    </>
  );
}

export default App;

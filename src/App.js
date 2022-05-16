import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

const [categories] = useState([
  {
    name: 'About Me',
    description: 'Information About Me',
  },
  { name: 'Portfolio', description: 'Portfolio with my developed Applications' },
  { name: 'Contact Me', description: 'Contact Me Section' },
  { name: 'Resume', description: 'Link to my Resume for download and list of my proeficiencies' },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);
const [contactSelected, setContactSelected] = useState(false);

return (
  <div>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
    ></Nav>
    <main>
      {!contactSelected ? (
        <>
          <Gallery  currentCategory={currentCategory}></Gallery>
          <About></About>
          <Resume ></Resume>
          
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
    </main>
    <footer>Hola</footer>

  </div>
);
}

export default App;
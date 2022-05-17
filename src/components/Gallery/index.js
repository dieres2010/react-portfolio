import React from 'react';
import Photolist from '../Photolist';
import About from '../About';
import Contact from '../Contact';
//import Resume from '../Resume';
//import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <Photolist category={currentCategory.name} />
    </section>
  );
}
export default Gallery;

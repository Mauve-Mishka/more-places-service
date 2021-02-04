import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import './normalize.css';
import './styles.css';
import MorePlacesSection from './components/MorePlacesSection';

ReactDOM.render(<MorePlacesSection />, document.getElementById('places'));
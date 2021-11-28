import { createGlobalStyle } from 'styled-components';

import { Global } from './global';
import { Lightbox } from './lightbox';

const GlobalStyle = createGlobalStyle`
${Global}
${Lightbox}
`;

export default GlobalStyle;

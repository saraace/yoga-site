import typography from './styles/typography';
import { sizes, layout } from './styles/layout';
import colors from './styles/colors';
import buttons from './styles/buttons/index';
import links from './styles/links';
import badges from './styles/badges';
import forms from './styles/forms/index';

const theme = {
  breakpoints: [ '576px', '768px', '992px', '1200px' ],
  ...typography,
  ...{ sizes }, 
  ...{ layout },
  ...{ colors },
  ...{ buttons },
  ...{ links },
  ...{ badges }, 
  ...{ forms }
};

export default theme;
/* import styled from '@emotion/styled';
import { Global, GlobalProps } from '@emotion/core'; */
import { injectGlobal } from 'emotion';

const GlobalStyle = injectGlobal`
    html,
    body{
        border: 1px solid red;
    }
`;

export default GlobalStyle;
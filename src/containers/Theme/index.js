import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { injectGlobal } from 'emotion';

class Theme extends React.Component {
    render() {
        injectGlobal`
            html, 
            body, 
            #__next{
                height: 100%;
            }
        `;
        return(
            <ThemeProvider theme={theme}>
                <>
                    {this.props.children}
                </>
            </ThemeProvider>
        );
    }
}

export default Theme;
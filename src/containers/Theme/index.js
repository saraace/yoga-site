import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

const Theme = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            <>
                {children}
            </>
        </ThemeProvider>
    );
}

export default Theme;
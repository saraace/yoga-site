import App from "next/app";
import { ThemeProvider } from "theme-ui"; 
import theme from "../utils/theme";
import Layout from "../containers/Layout";

class MyApp extends App {
  render(){
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default MyApp

import App from "next/app";
import Theme from "../containers/Theme";
import Layout from "../containers/Layout";

class MyApp extends App {
  render(){
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    )
  }
}

export default MyApp

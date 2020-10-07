import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentWrapper, { Page } from "./styles";

const Layout = ({ children }) => {
  return (
    <ContentWrapper>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Page>{children}</Page>
      <Footer />
    </ContentWrapper>
  )
}

export default Layout;

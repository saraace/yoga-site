import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentWrapper, { Page } from "./styles";

const Layout = ({ children }) => {
  const router = useRouter();

  let style = {};
  if(router.pathname === "/sign-up"){
    style = {
      backgroundImage: 'url(/images/sign-up/bg.png)'
    }
  }
  
  return (
    <ContentWrapper style={style}>
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

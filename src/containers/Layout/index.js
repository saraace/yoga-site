import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence } from 'framer-motion';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ContentWrapper, BackgroundGradient, BackgroundImage, Page } from "./styles";

const Layout = ({ children }) => {

  const router = useRouter();
  const [ background, setBackground ] = useState('gradient'); 
  const initial = { opacity: 0 }; 
  const animate = { opacity: 1 }; 
  const exit = { opacity: 0 };

  useEffect(() => {
    if(router.pathname === "/sign-up"){
      setBackground('/images/sign-up/bg.png');
    } else if(router.pathname === '/') {
      setBackground('/images/homepage/bg.png');
    } else{
      setBackground('gradient');
    }
  }, [router.pathname]);
  
  return (
    <ContentWrapper>
      <AnimatePresence>
        {background === 'gradient' && <BackgroundGradient {...{initial}} {...{animate}} {...{exit}} />}
      </AnimatePresence>
      <AnimatePresence>
        {background !== 'gradient' && <BackgroundImage {...{initial}} {...{animate}} {...{exit}} ><img src={background} /></BackgroundImage>}
      </AnimatePresence>
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

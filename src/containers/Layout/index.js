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
  const [ bgClass, setBgClass ] = useState('');
  const initial = { opacity: 0 }; 
  const animate = { opacity: 1 }; 
  const exit = { opacity: 0 };

  useEffect(() => {
    console.log(router);
    if(router.pathname === "/sign-up"){
      setBgClass('');
      setBackground('/images/sign-up/bg.png');
    } else if(router.pathname === '/') {
      setBgClass('homepage');
      setBackground('/images/homepage/bg.png');
    } else if(router.pathname === '/instructors/[id]'){
      setBgClass('');
      setBackground('/images/instructors/bg-instructor.jpg');
    } else if(router.pathname === '/locations/[id]'){
      setBgClass('');
      setBackground('/images/locations/bg-location.png');
    } else{
      setBgClass('');
      setBackground('gradient');
    }
  }, [router.pathname]);
  
  return (
    <ContentWrapper>
      <AnimatePresence>
        {background === 'gradient' && <BackgroundGradient {...{initial}} {...{animate}} {...{exit}} />}
      </AnimatePresence>
      <AnimatePresence>
        {background !== 'gradient' && <BackgroundImage className={bgClass} {...{initial}} {...{animate}} {...{exit}} ><img src={background} /></BackgroundImage>}
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

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
    if(router.pathname === "/sign-up"){
      setBgClass('');
      setBackground('/images/sign-up/bg.png');
    } else if(router.pathname === "/careers"){
      setBgClass('');
      setBackground('/images/careers/bg.png');
    } else if(router.pathname === "/contact"){
      setBgClass('');
      setBackground('/images/contact/bg.jpg');
    } else if(router.pathname === "/press"){
      setBgClass('');
      setBackground('/images/press/bg.jpg');
    } else if(router.pathname === "/new-to-yoga"){
      setBgClass('');
      setBackground('/images/new-to-yoga/bg.png');
    } else if(router.pathname === "/locations"){
      setBgClass('');
      setBackground('/images/locations/bg.jpg');
    } else if(router.pathname === "/about"){
      setBgClass('');
      setBackground('/images/about/bg.png');
    } else if(router.pathname === '/') {
      setBgClass('dashboard');
      setBackground('/images/dashboard/bg.png');
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
        {background === 'gradient' && <BackgroundGradient {...{ initial, animate, exit }} />}
      </AnimatePresence>
      <AnimatePresence>
        {background !== 'gradient' && <BackgroundImage className={bgClass} {...{ initial, animate, exit }} ><img src={background} /></BackgroundImage>}
      </AnimatePresence>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Page className={ router.pathname === "/shift" ? "shift" : "" }>{children}</Page>
      <Footer />
    </ContentWrapper>
  )
}

export default Layout;

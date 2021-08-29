import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ContentWrapper, BackgroundGradient, Page } from "./styles";

const Layout = ({ children }) => {
  const router = useRouter();
  const [background, setBackground] = useState("gradient");
  const [bgClass, setBgClass] = useState("");
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const exit = { opacity: 0 };

  return (
    <ContentWrapper>
      <BackgroundGradient {...{ initial, animate, exit }} />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Page className={router.pathname === "/" ? "shift" : ""}>{children}</Page>
      <Footer />
    </ContentWrapper>
  );
};

export default Layout;

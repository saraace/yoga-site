import { Provider } from "react-redux";
import Theme from "../containers/Theme";
import Layout from "../containers/Layout";
import { useStore } from "../store";

export default function App({ Component, pageProps }) {
  const store = useStore();

  return (
    <Theme>
      <Provider {...{ store }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Theme>
  );
}

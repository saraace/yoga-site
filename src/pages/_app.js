import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import Theme from "../containers/Theme";
import Layout from "../containers/Layout";
import { useStore } from "../store";
import rest from "../services/fetcher";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Theme>
      <Provider {...{ store }}>
        <Layout>
          <SWRConfig
            value={{
              fetcher: rest,
              onError: (err) => {
                // TODO: Catch 401/403s
                console.error("this is an error ", err);
              },
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </Layout>
      </Provider>
    </Theme>
  );
}

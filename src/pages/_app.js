import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import Theme from "../containers/Theme";
import Layout from "../containers/Layout";
import { useStore } from "../store";
import { useApollo } from "../apollo";

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);
  const store = useStore();
  const client = useApollo(pageProps.initialApolloState);

  return (
    <Theme>
      <Provider {...{ store }}>
        <ApolloProvider {...{ client }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Provider>
    </Theme>
  );
}

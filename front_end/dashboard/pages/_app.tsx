import Layout from "@/components/Layout";
import Loader from "@/components/Loading";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Loader>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Loader>
    </UserProvider>
  );
}

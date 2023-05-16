import Layout from "@/components/Layout";
import Loader from "@/components/Loading";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <UserProvider>
          <Loader>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Loader>
        </UserProvider>
      </ParallaxProvider>
    </ChakraProvider>
  );
}

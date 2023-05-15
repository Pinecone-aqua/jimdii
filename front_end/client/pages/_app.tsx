import Layout from "@/components/Layout";
import UserProvider from "@/context/UserContext";
import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  );
}

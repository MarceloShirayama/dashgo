import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { SidebarDrawerProvider } from "src/context/SidebarDrawerContext";
import { theme } from "src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;

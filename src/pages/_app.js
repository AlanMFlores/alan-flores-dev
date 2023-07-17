import '@component/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../../theme';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../fontawesome";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

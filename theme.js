import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    mainColor: "#4FBDBA"
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
      },
    },
  },
});

export default theme;
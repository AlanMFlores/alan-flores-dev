import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    mainColor: "#4FBDBA"
  },
  styles: {
    global: {
      "html, body": {
        bg: "gray.900",
        scrollBehavior: "smooth"
      },
    },
  },
});

export default theme;
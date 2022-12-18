import { globalCss } from "@modulz/design-system"

export const headerStyles = globalCss({
  "header": {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: "$1",
    backgroundImage: "linear-gradient(to right, #c00e4f, #8b206f)"
  },
  ".header-logo": {
    background: "url(/logo-new.svg) left top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "$whiteA1",
    width: "40px",
    height: "40px",
    margin: "auto",
  },
  "h2": {
    display: "none",
    '@bp2': {
      display: "block"
    }
  },
  "img": {
    margin: 0,
    width: "40px",
    filter: "invert(1)",
    '@bp2': {
      marginLeft: "10px"
    }
  }
})


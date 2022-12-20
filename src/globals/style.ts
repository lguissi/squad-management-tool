import { globalCss } from "@modulz/design-system"

export const globalStyles = globalCss({
  "body": { 
    margin: 0,
    fontFamily: "$untitled",
    WebkitTextSizeAdjust: "100%",
  },

  "h1, h2, h3, h4, h5": { fontWeight: 400, color: "white" },

  "table": {color: '$black', fontWeight: 600},

  "td:active button": {
    backgroundColor: '$gray5'
  }
})
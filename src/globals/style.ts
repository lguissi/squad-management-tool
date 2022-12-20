import { globalCss } from "@modulz/design-system"

export const globalStyles = globalCss({
  "body": { 
    margin: 0,
    fontFamily: "$untitled",
    WebkitTextSizeAdjust: "100%",
  },

  "h1, h2, h3, h4, h5": { fontWeight: 400, color: "white" },

  "table td": {color: '$black', fontWeight: 600},

  "td:active button": {
    backgroundColor: '$gray5'
  },

  ".box-white": {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '30px 0'
  },

  "h2.title-box": {
    color: '#552c8a',
    fontWeight: 700,
    padding: '0 20px 30px',
    borderBottom: '1px solid $gray5',
    mb: '10px'
  },

  "h4.average-title": {color: '$black', fontWeight: 600, fontSize: '$3', mb: '10px'}
})
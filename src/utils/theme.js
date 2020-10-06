export default {
  colors: {
    text: "#fff",
    background: "#0b1525",
    primary: "#FFD215", 
    secondary: "#FF4BD0", 
    accent: "#FB5E5E", 
    highlight: "#3CBCEB", 
    muted: "rgba(255, 255, 255, 0.4)",
    green: "#41BC3F", 
    indigo: "#7F63F1", 
    purple: "#C081FC",
    white: "#fff"
  },
  breakpoints: [
    576, 768, 992, 1200
  ],
  fontSizes: [12, 14, 16, 20, 40, 42],
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  sizes: {
    container: 1200
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
      h1: {
        fontSize: 5,
      },
      h2: {
        fontSize: 4,
      },
      h3: {
        fontSize: 3,
      },
      h4: {
        fontSize: 2,
      },
      h5: {
        fontSize: 1,
      },
      h6: {
        fontSize: 0,
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
    },
  }
};
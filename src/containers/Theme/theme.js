const button = {
  cursor: 'pointer',
  fontFamily: 'body', 
  fontWeight: 700,
  textTransform: 'uppercase', 
  borderWidth: '2px', 
  borderStyle: 'solid', 
  borderRadius: 32, 
  fontSize: 1, 
  lineHeight: 1, 
  p: '15px 30px', 
  outline: 'none', 
  transition: '0.3s all ease'
};
const buttonBlock = {
  width: '100%', 
  display: 'block'
}

export default {
  breakpoints: [ '576px', '768px', '992px', '1200px' ],
  fontSizes: [12, 14, 16, 20, 40, 42],
  colors: {
    text: "#fff",
    background: "#0b1525",
    dark: "#132A4D",
    muted: "rgba(255, 255, 255, 0.4)",
    primary: "#FFD215", 
    secondary: "#fff",
    accent: "#FF4BD0", 
    highlight: "#FB5E5E", 
    danger: "#FB5E5E", 
    cyan: "#3CBCEB", 
    green: "#41BC3F", 
    success: "#41BC3F", 
    indigo: "#7F63F1", 
    purple: "#C081FC", 
  },
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 600,
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
        fontWeight: 'heading'
      },
      h2: {
        fontSize: 4,
        fontWeight: 'heading'
      },
      h3: {
        fontSize: 3,
        fontWeight: 'heading'
      },
      h4: {
        fontSize: 2,
        fontWeight: 'heading'
      },
      h5: {
        fontSize: 1,
        fontWeight: 'heading'
      },
      h6: {
        fontSize: 0,
        fontWeight: 'heading'
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
      container: {
        p: '0px 24px'
      }
    },
  }, 
  layout: {
    container: {
      p: '0px 24px'
    }
  },
  buttons: {
    primary: {
      color: 'dark', 
      bg: 'primary', 
      borderColor: 'primary',
      boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5), rgba(255, 255, 255, 0.4) 0 0 12px 0 inset',
      ... button,
      '&:focus, &:hover': {
        bg: 'transparent', 
        color: 'primary', 
        boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)'
      }
    },
    'primary-block': {
      variant: 'buttons.primary',
      ... buttonBlock
    },
    'primary-outline': {
      color: 'primary', 
      bg: 'transparent', 
      borderColor: 'primary',
      boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)',
      ... button,
      '&:focus, &:hover': {
        bg: 'primary', 
        color: 'dark', 
        boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)'
      }
    },
    'primary-outline-block': {
      variant: 'buttons.primary-outline',
      ... buttonBlock
    },
    secondary: {
      color: 'dark', 
      bg: 'secondary',
      borderColor: 'secondary',
      ... button,
      '&:focus, &:hover': {
        bg: 'transparent', 
        color: 'secondary'
      }
    },
    'secondary-outline': {
      color: 'secondary', 
      bg: 'transparent', 
      borderColor: 'secondary',
      ... button,
      '&:focus, &:hover': {
        bg: 'secondary', 
        color: 'dark' 
      }
    }
  },
  forms: {
    input: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: 1,
      lineHeight: '18px',
      border: '2px solid #fff;',
      borderRadius: 24,
      p: '13px 24px', 
      outline: 'none', 
      transition: '0.3s all ease',
      '&::placeholder': {
        color: 'text', 
        opacity: '0.8'
      },
      '&:focus': {
        borderColor: 'primary', 
        boxShadow: '0 0 10px 0 rgba(255, 239, 169, 0.5)'
      }
    },
    select: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: 1,
      lineHeight: '18px',
      border: '2px solid #fff;',
      borderRadius: 24,
      p: '13px 24px', 
      outline: 'none', 
      transition: '0.3s all ease',
      '&:focus': {
        borderColor: 'primary', 
        boxShadow: '0 0 10px 0 rgba(255, 239, 169, 0.5)'
      },
      '& + svg': {
        display: 'none'
      }
    }
  }
};
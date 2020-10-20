const button = {
  display: 'inline-block',
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

const squareButton = {
  display: 'inline-block',
  cursor: 'pointer',
  fontFamily: 'body', 
  fontWeight: 500,
  borderRadius: 8, 
  fontSize: 1, 
  lineHeight: 1.56, 
  textTransform: 'none',
  p: '12px 25px', 
  outline: 'none', 
  transition: '0.3s all ease'
};

const buttonBlock = {
  width: '100%', 
  display: 'block'
};

const iconButton = {
  display: 'flex',
  p: '13px 24px',
  alignItems: 'center',
  justifyContent: 'center',
  'svg': {
    height: '16px',
    m: '0 10px 0 0',
    transition: '0.3s all ease'
  }
}

const theme = {
  breakpoints: [ '576px', '768px', '992px', '1200px' ],
  fontSizes: [12, 14, 16, 20, 40, 42, 60, 78],
  colors: {
    text: "#fff",
    background: "#0b1525",
    dark: "#132A4D",
    muted: "rgba(255, 255, 255, 0.4)",
    primary: "#FFD215", 
    secondary: "#fff",
    accent: "#FF4BD0", 
    highlight: "#3CBCEB", 
    danger: "#FB5E5E", 
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
    body: 1.4,
    heading: 1.125,
  },
  sizes: {
    container: 1200
  },
  layout: {
    container: {
      p: '0 24px'
    }, 
    fluid: {
      maxWidth: '100%', 
      p: '0 24px'
    }, 
    small: {
      maxWidth: '938px', 
      p: '0 24px'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 1,
      h1: {
        fontSize: 5,
        fontWeight: 'heading'
      },
      h2: {
        fontSize: 4,
        fontWeight: 'heading', 
        lineHeight: '1.255',
        m: '0 0 24px 0'
      },
      h3: {
        fontSize: 3,
        fontWeight: 'heading', 
        lineHeight: '1.33',
        m: '0 0 1rem 0'
      },
      h4: {
        fontSize: 2,
        fontWeight: 'heading', 
        lineHeight: '1.4',
        m: '0 0 0.25rem 0'
      },
      h5: {
        fontSize: 1,
        fontWeight: 'heading'
      },
      h6: {
        fontSize: 0,
        fontWeight: 'heading'
      },
      a: {
        color: 'text',
        transition: '0.3s all ease',
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
  }, 
  badges: {
    danger: {
      bg: 'danger', 
      lineHeight: '1', 
      p: '2px 5px',
      borderRadius: '5px', 
    }
  },
  links: {
    nav: {
      color: 'text',
      p: '10px',
      fontSize: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.045em',
      position: 'relative',
      cursor: 'pointer',
      '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '3px',
          right: '3px',
          height: '2px',
          bg:  'accent',
          transition: '0.3s all ease',
          transform: 'scaleX(0)',
          transformOrigin: 'left center',
      },
      '&:hover, &.active': {
        color: 'text',
        '&:after': {
            transform: 'scaleX(1)'
        }
      }, 
      '@media (min-width: 1200px)': {
          p: '10px 25px'         
      }
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
    'primary-icon':{
      variant: 'buttons.primary',
      ... iconButton,
      'svg': {
        ... iconButton.svg, 
        fill: 'dark'
      },
      '&:focus, &:hover': {
        variant: 'buttons.primary',
        ... iconButton,
        'svg': {
          fill: 'primary'
        }
      }
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
    'primary-outline-square': {
      variant: 'buttons.primary-outline',
      ...squareButton,
      ...iconButton
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
    'secondary-block': {
      variant: 'buttons.secondary',
      ... buttonBlock
    },
    'secondary-icon':{
      variant: 'buttons.secondary',
      ... iconButton,
      'svg': {
        ... iconButton.svg, 
        fill: 'dark'
      },
      '&:focus, &:hover': {
        variant: 'buttons.secondary',
        ... iconButton,
        'svg': {
          fill: 'secondary'
        }
      }
    },
    'secondary-outline': {
      color: 'secondary', 
      bg: 'transparent', 
      borderColor: 'secondary',
      'svg, path, polygon': {
        fill: 'secondary'
      },
      ... button,
      '&:focus, &:hover': {
        bg: 'secondary', 
        color: 'dark',
        'svg, path, polygon': {
          fill: 'dark'
        } 
      }
    },
    'secondary-outline-block': {
      variant: 'buttons.secondary-outline',
      ... buttonBlock
    },
    'secondary-outline-square': {
      variant: 'buttons.secondary-outline',
      ...squareButton,
      ...iconButton,
    },
    highlight: {
      color: 'dark', 
      bg: 'highlight',
      borderColor: 'highlight',
      ... button,
      '&:focus, &:hover': {
        bg: 'transparent', 
        color: 'highlight'
      }
    },
    'highlight-block': {
      variant: 'buttons.highlight',
      ... buttonBlock
    },
    'highlight-icon':{
      variant: 'buttons.highlight',
      ... iconButton,
      'svg': {
        ... iconButton.svg, 
        fill: 'dark'
      },
      '&:focus, &:hover': {
        variant: 'buttons.highlight',
        ... iconButton,
        'svg': {
          fill: 'highlight'
        }
      }
    },
    'highlight-outline': {
      color: 'text', 
      bg: 'transparent', 
      borderColor: 'highlight',
      'svg, path, polygon': {
        fill: 'text'
      }, 
      ... button,
      '&:focus, &:hover': {
        bg: 'highlight', 
        color: 'text' 
      }
    },
    'highlight-outline-block': {
      variant: 'buttons.highlight-outline',
      ... buttonBlock
    },
    'highlight-outline-square': {
      variant: 'buttons.highlight-outline',
      ...squareButton
    },
  },
  forms: {
    input: {
      fontFamily: 'body',
      fontWeight: 400,
      fontSize: 1,
      lineHeight: '18px',
      border: '2px solid #fff',
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
      border: '2px solid #fff',
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

export default theme;
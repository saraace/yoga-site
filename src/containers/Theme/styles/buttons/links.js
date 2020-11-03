const linkButtons = {
    link: {
        color: 'highlight', 
        bg: 'transparent',
        fontFamily: 'body',
        outline: 'none', 
        cursor: 'pointer', 
        '&:hover': {
        textDecoration: 'underline'
        }
    },
    'link-secondary': {
        color: 'secondary', 
        bg: 'transparent',
        fontFamily: 'body',
        outline: 'none', 
        cursor: 'pointer', 
        p: 0,
        textDecoration: 'underline',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    'link-danger': {
        color: 'danger', 
        bg: 'transparent',
        fontFamily: 'body',
        outline: 'none', 
        cursor: 'pointer', 
        p: 0,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    'small-link': {
        color: 'highlight', 
        bg: 'transparent',
        fontFamily: 'body',
        fontSize: 0,
        padding: '0 10px',
        outline: 'none', 
        cursor: 'pointer', 
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}; 

export default linkButtons;
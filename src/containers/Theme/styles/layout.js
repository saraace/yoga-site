export const sizes = {
    container: 1200
};

export const layout = {
    container: {
        p: '0 24px', 
    }, 
    fluid: {
        maxWidth: '100%', 
        p: '0 24px'
    }, 
    small: {
        maxWidth: '938px', 
        p: '0 24px'
    }, 
    large: {
        maxWidth: '1440px', 
        p: '0 24px'
    },
    'no-mobile-gutters': {
        p: '0', 
        '@media (min-width: 992px)':{
        p: '0 24px'
        }
    },
    'no-gutters': {
        p: '0', 
    }
};
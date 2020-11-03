import { round, square, block, icon } from './global';

const primaryButtons = {
    primary: {
        ... round,
        color: 'dark', 
        bg: 'primary', 
        borderColor: 'primary',
        boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5), rgba(255, 255, 255, 0.4) 0 0 12px 0 inset',  
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'dark'
        },

        '&:focus, &:hover': {
            bg: 'transparent', 
            color: 'primary',
            boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)',   

            'svg, path, polygon': {
                fill: 'primary'
            } 
        }
    }, 
    'primary-outline': {
        ... round,
        color: 'primary', 
        bg: 'transparent', 
        borderColor: 'primary',
        boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'primary'
        },

        '&:focus, &:hover': {
            bg: 'primary', 
            color: 'dark', 
            boxShadow: '0 0 24px 0 rgba(255, 239, 169, 0.5)',

            'svg, path, polygon': {
                fill: 'dark'
            } 
        }
    }, 
    'primary-square': {
        variant: 'buttons.primary', 
        ...square
    },  
    'primary-outline-square': {
        variant: 'buttons.primary-outline',
        ...square
    },
    'primary-block': {
        variant: 'buttons.primary', 
        ...block
    },
    'primary-outline-block': {
        variant: 'buttons.primary-outline', 
        ...block
    },
    'primary-icon': {
        variant: 'buttons.primary',
        ... icon,
    },
    'primary-outline-icon': {
        variant: 'buttons.primary-outline',
        ... icon,
    },
    'primary-square-icon': {
        variant: 'buttons.primary-square',
        ... icon,
    },
    'primary-outline-square-icon': {
        variant: 'buttons.primary-outline-square',
        ... icon,
    }
}

export default primaryButtons;
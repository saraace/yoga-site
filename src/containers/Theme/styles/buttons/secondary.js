import { round, square, block, icon } from './global';

const secondaryButtons = {
    secondary: {
        ... round,
        color: 'dark', 
        bg: 'secondary', 
        borderColor: 'secondary',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'dark'
        },

        '&:focus, &:hover': {
            bg: 'transparent', 
            color: 'secondary',

            'svg, path, polygon': {
                fill: 'secondary'
            } 
        }
    }, 
    'secondary-outline': {
        ... round,
        color: 'secondary', 
        bg: 'transparent', 
        borderColor: 'secondary',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'secondary'
        },

        '&:focus, &:hover': {
            bg: 'secondary', 
            color: 'dark', 

            'svg, path, polygon': {
                fill: 'dark'
            } 
        }
    }, 
    'secondary-square': {
        variant: 'buttons.secondary', 
        ...square
    },  
    'secondary-outline-square': {
        variant: 'buttons.secondary-outline',
        ...square
    },
    'secondary-block': {
        variant: 'buttons.secondary', 
        ...block
    },
    'secondary-outline-block': {
        variant: 'buttons.secondary-outline', 
        ...block
    },
    'secondary-icon': {
        variant: 'buttons.secondary',
        ... icon,
    },
    'secondary-outline-icon': {
        variant: 'buttons.secondary-outline',
        ... icon,
    },
    'secondary-square-icon': {
        variant: 'buttons.secondary-square',
        ... icon,
    },
    'secondary-outline-square-icon': {
        variant: 'buttons.secondary-outline-square',
        ... icon,
    }
}

export default secondaryButtons;
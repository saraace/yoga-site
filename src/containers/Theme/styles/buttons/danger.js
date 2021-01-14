import { round, square, block, icon } from './global';

const dangerButtons = {
    danger: {
        ... round,
        color: 'text', 
        bg: 'danger', 
        borderColor: 'danger',
        boxShadow: '0 0 24px 0 #FB5E5E, rgba(255, 255, 255, 0.4) 0 0 12px 0 inset',  
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'text'
        },

        '&:focus, &:hover': {
            bg: 'transparent', 
            color: 'danger',
            boxShadow: '0 0 24px 0 #FB5E5E',   

            'svg, path, polygon': {
                fill: 'danger'
            } 
        }
    }, 
    'danger-outline': {
        ... round,
        color: 'danger', 
        bg: 'transparent', 
        borderColor: 'danger',
        boxShadow: '0 0 24px 0 #FB5E5E',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'danger'
        },

        '&:focus, &:hover': {
            bg: 'danger', 
            color: 'dark', 
            boxShadow: '0 0 24px 0 #FB5E5E',

            'svg, path, polygon': {
                fill: 'dark'
            } 
        }
    }, 
    'danger-square': {
        variant: 'buttons.danger', 
        ...square
    },  
    'danger-outline-square': {
        variant: 'buttons.danger-outline',
        ...square
    },
    'danger-block': {
        variant: 'buttons.danger', 
        ...block
    },
    'danger-outline-block': {
        variant: 'buttons.danger-outline', 
        ...block
    },
    'danger-icon': {
        variant: 'buttons.danger',
        ... icon,
    },
    'danger-outline-icon': {
        variant: 'buttons.danger-outline',
        ... icon,
    },
    'danger-square-icon': {
        variant: 'buttons.danger-square',
        ... icon,
    },
    'danger-outline-square-icon': {
        variant: 'buttons.danger-outline-square',
        ... icon,
    }
}

export default dangerButtons;
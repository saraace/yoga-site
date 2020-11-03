import { round, square, block, icon } from './global';

const highlightButtons = {
    highlight: {
        ... round,
        color: 'dark', 
        bg: 'highlight', 
        borderColor: 'highlight',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'dark'
        },

        '&:focus, &:hover': {
            bg: 'transparent', 
            color: 'highlight',

            'svg, path, polygon': {
                fill: 'highlight'
            } 
        }
    }, 
    'highlight-outline': {
        ... round,
        color: 'highlight', 
        bg: 'transparent', 
        borderColor: 'highlight',
        
        'svg, path, polygon': {
            ... icon.svg, 
            fill: 'highlight'
        },

        '&:focus, &:hover': {
            bg: 'highlight', 
            color: 'dark', 

            'svg, path, polygon': {
                fill: 'dark'
            } 
        }
    }, 
    'highlight-square': {
        variant: 'buttons.highlight', 
        ...square
    },  
    'highlight-outline-square': {
        variant: 'buttons.highlight-outline',
        color: 'text',
        ...square
    },
    'highlight-block': {
        variant: 'buttons.highlight', 
        ...block
    },
    'highlight-outline-block': {
        variant: 'buttons.highlight-outline', 
        ...block
    },
    'highlight-icon': {
        variant: 'buttons.highlight',
        ... icon,
    },
    'highlight-outline-icon': {
        variant: 'buttons.highlight-outline',
        ... icon,
    },
    'highlight-square-icon': {
        variant: 'buttons.highlight-square',
        ... icon,
    },
    'highlight-outline-square-icon': {
        variant: 'buttons.highlight-outline-square',
        'svg, path, polygon': {
            fill: 'text'
        },
        ... icon,
    }
}

export default highlightButtons;
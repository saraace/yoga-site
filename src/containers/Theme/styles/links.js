const links = {
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
}

export default links;
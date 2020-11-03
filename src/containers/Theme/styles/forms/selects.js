const selects = {
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
    }, 
    'underline-select': {
        fontFamily: 'body',
        fontWeight: 400,
        fontSize: 2,
        border: '0px',
        borderBottom: '2px solid #fff', 
        borderRadius: '0px', 
        p: '8px', 
        outline: 'none',
        transition: '0.3s all ease',
        '&:disabled': {
            borderColor: 'transparent'
        },
        '&:focus': {
            borderColor: 'primary'
        },
        '& + svg': {
            display: 'none'
        }
    }
}

export default selects;
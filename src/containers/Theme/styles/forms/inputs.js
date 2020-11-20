const inputs = {
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
    'underline-input': {
        fontFamily: 'body',
        fontWeight: 400,
        fontSize: 2,
        border: '0px',
        borderBottom: '2px solid #fff', 
        borderRadius: '0px', 
        outline: 'none',
        transition: '0.3s all ease',
        '&::placeholder': {
            color: 'text', 
            opacity: '0.8'
        },
        '&:disabled': {
            borderColor: 'transparent'
        },
        '&:focus': {
            borderColor: 'primary'
        }
    }
}

export default inputs;
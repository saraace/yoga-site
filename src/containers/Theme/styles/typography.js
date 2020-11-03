const typography = {
    fontSizes: [ 12, 14, 16, 20, 40, 42, 60, 78 ],
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
        }
    }
};

export default typography;
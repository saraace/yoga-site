import { Indicator, LargeCircle, SmallCircle, Mouse } from "./styles"; 

const ScrollIndicator = ({ height }) => {

    return(
        <Indicator style={{ top: height-61 }}>
            <LargeCircle 
                initial={{ backgroundColor: 'rgba( 255, 255, 255, 0)' }}
                animate={{ backgroundColor: 'rgba( 255, 255, 255, 0.3)' }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            >
                <SmallCircle 
                    initial={{ backgroundColor: 'rgba( 255, 255, 255, 0)' }}
                    animate={{ backgroundColor: 'rgba( 255, 255, 255, 0.5)' }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }} 
                >
                    <Mouse />
                </SmallCircle>
            </LargeCircle>
        </Indicator>
    )
}

export default ScrollIndicator;
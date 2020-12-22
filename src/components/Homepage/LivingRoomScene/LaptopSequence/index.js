/* COMPONENTS */
import DesktopScene from "./Desktop";
import StaticScene from "./Static";

const LaptopSequence = ({ staticScenes, isMobile, ...rest }) => {

    const content = () => {
        return (
            <h1>Enjoy classes from your laptop</h1>
        )
    }

    return(
        <> 
            {!staticScenes && (
                <> 
                    {!isMobile && <DesktopScene {...{ content: content() }} {...rest} />}
                </>
            )}
            {staticScenes && <StaticScene {...{ content: content() }} />}
        </>
    )
}

export default LaptopSequence;
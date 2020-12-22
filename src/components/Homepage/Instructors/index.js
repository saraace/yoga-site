/* COMPONENTS */
import DesktopScene from "./Desktop";
import StaticScene from "./Static"; 

const InstructorsScene = ({ staticScenes, isMobile, ...rest }) => {

    const heading = () => {
        return(
            <> 
                <h3>World-class Instructors</h3>
                <h2>Introducing Paige Held</h2>
            </>
        );
    }

    const content = () => {
        return (
            <p>Paige began practicing yoga at the age of 13 and became a certified yoga teacher in 2000. The founder of one of South Florida’s most celebrated yoga &amp; fitness studios, she is the co-creator of the SHIFT method.</p>
        )
    }

    return(
        <>
            {!staticScenes && (
                <> 
                    {!isMobile && <DesktopScene {...{ heading: heading(), content: content() }} {...rest} />}
                </>
            )}
            {staticScenes && <StaticScene {...{ isMobile, heading: heading(), content: content() }} />}
        </>
    )
}

export default InstructorsScene;
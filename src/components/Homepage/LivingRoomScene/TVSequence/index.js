/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link"; 

/* COMPONENTS */
import DesktopScene from "./Desktop";
import StaticScene from "./Static";

const TVSequence = ({ staticScenes, isMobile, ...rest }) => {

    const poseContent = () => {
        return (
            <>
                <h1>We Are More Than&nbsp;Fitness</h1>
                <p>Experience our yoga, FIIT &amp; restore classes, in-studio or online.</p>
                <div className="button-row">
                    <button sx={{ variant: "buttons.secondary-outline" }}>Watch Video</button>
                    <Link href="/sign-up">
                        <a sx={{ variant: "buttons.primary" }}>Sign Up</a>
                    </Link>
                </div>
            </>
        )
    }

    const tvContent = () => {
        return (
            <> 
                <div>
                    <h2>
                        <div>Workout at </div>
                        <div>Home</div>
                    </h2>
                    <h3>Yoga &amp; fitness where you want, when you want. </h3>
                </div>
                <div>
                    <p>Forget about fighting traffic to get to the studio, or worrying about being late for your favorite class. Just download the SHIFT app and gain instant access to our suite of online, on-demand classes.</p>
                </div>
            </>
        )
    }

    return(
        <>
            {!staticScenes && (
                <>
                    {!isMobile && <DesktopScene {...{ poseContent: poseContent(), tvContent: tvContent() }} {...rest} />}
                </>
            )}
            {staticScenes && <StaticScene {...{ poseContent: poseContent(), tvContent: tvContent() }} />}
        </>
    )
}

export default TVSequence;
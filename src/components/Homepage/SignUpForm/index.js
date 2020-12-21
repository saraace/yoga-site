import DesktopScene from "./Desktop/"; 

const SignUpScene = ({ staticScenes, ...rest }) => {
    return(
        <DesktopScene {...{ staticScenes }} {...rest} />
    )
}

export default SignUpScene;
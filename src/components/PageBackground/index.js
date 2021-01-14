import { BackgroundImage } from "./styles";

const PageBackground = ({ src }) => {
    return(
        <BackgroundImage 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img {...{ src }} />
        </BackgroundImage>
    )
}

export default PageBackground;
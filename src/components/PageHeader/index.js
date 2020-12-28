import { Intro } from "./styles";

const PageHeader = ({ heading, children}) => {
    return(
        <Intro>
            <h1>{heading}</h1>
            {children}
        </Intro>
    )
}

export default PageHeader;
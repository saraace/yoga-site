import { MasonryGrid } from "./styles";

const MasonrySection = ({children}) => {
    return(
        <MasonryGrid>
            {children}
        </MasonryGrid>
    );
}

export default MasonrySection;
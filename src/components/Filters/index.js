import { FilterButton } from "./styles";
import FilterIcon from "../../assets/svgs/filter-icon.svg";

const Filters = () => {
    return(
        <FilterButton>
            <FilterIcon />
            <span>Filters</span>
        </FilterButton>
    )
}

export default Filters;
import { Badge } from './styles';

const ClassTypeBadge = ({ type }) => {
    return(
        <Badge className={type}>
            {type === "follow"? "Yoga Follow" : type}
        </Badge>
    )
}

export default ClassTypeBadge;
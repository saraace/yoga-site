import PropTypes from "prop-types";
import Link from 'next/link'; 
import { BackLink } from './styles';
import { BackArrow } from '../../assets/svgs/left-arrow.svg';

const BackButton = ({ link, text }) => {
    return(
        <Link href={link}>
            <BackLink title={text} ><BackArrow />{text}</BackLink>
        </Link>
    )
}

BackButton.defaultProps = {
    link: '/classes', 
    text: 'Back to classes', 
}

BackButton.propTypes = {
    link: PropTypes.string, 
    text: PropTypes.string
}

export default BackButton;
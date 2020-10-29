import PropTypes from "prop-types";
import { StatButton, Col, Title, Metric } from './styles';
import ChevronRight from '../../../../assets/svgs/chevron-right.svg';

const Stat = ({ title, metric, unit }) => {
    return(
        <StatButton>
            <Col>
                <Title>{title}</Title>
                <Metric>
                    {metric}
                    {unit && <span>{unit}</span>}
                </Metric>
            </Col>
            <Col>
                <ChevronRight />
            </Col>
        </StatButton>
    )
}

Stat.propTypes = {
    title: PropTypes.string.isRequired, 
    metric: PropTypes.string.isRequired, 
    unit: PropTypes.string
}

export default Stat;
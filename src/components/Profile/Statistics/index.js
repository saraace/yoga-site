import { Stats } from './styles';
import Stat from './Stat';

const Statistics = ({ stats }) => {

    return(
        <>
        <h3>Statistics</h3>
        <Stats>
            {stats.map((stat, i) => (
                <Stat key={i} {...stat} />
            ))}
        </Stats>
        </>
    )
}

export default Statistics;
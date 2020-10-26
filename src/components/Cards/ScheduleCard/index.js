import ClassCard from '../ClassCard';
import { Card, CardTop, Title, Date, Description, ClassCards } from './styles';

const ScheduleCard = ({ title, date, description, classes }) => {

    return(
        <Card>
            <CardTop>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </CardTop>
            <Description>{description}</Description>
            <ClassCards>
                {classes.map((c, i) => (
                    <ClassCard key={i} {...c} className={classes.length > 1? 'scheduleTwo': 'scheduleOne'}/>
                ))}
            </ClassCards>
        </Card>
    )
}

export default ScheduleCard;
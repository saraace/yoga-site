import { Badges, Badge } from './styles';

const Achievements = ({ achievements }) => {
    return(
        <>
            <h3>Achievements</h3>
            <Badges>
                {achievements.map((achievement, i) => (
                    <Badge key={i}>
                        <img src={achievement.image} alt="" />
                    </Badge>
                ))}
            </Badges>
        </>
    )
}

export default Achievements;
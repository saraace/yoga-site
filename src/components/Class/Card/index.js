import { Card, CardContent, CardHeader, CardFooter, Image, ClassType, Details } from "./styles"

const ClassCard = ({ size, title, teacher, difficulty, duration, type, date, time, image }) => {
    return(
        <Card className={size}>
            <Image src={image} title={title} />
            <CardContent>
                <CardHeader>
                    <div>
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                    <div>
                        <ClassType className={type}>{type === "follow"? "Yoga Follow" : type}</ClassType>
                    </div>
                </CardHeader>
                <CardFooter>
                    <h3>{title}</h3>
                    <Details>
                        <span>{teacher}</span>
                        <span>{difficulty}</span>
                        <span>{duration}</span>
                    </Details>
                </CardFooter>
            </CardContent>
        </Card>
    )
}

export default ClassCard;
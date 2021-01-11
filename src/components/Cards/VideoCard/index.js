import PropTypes from "prop-types";
import { CardWrapper, CardHeader, CardFooter, Title, Details } from "./styles";
import ClassTypeBadge from "../../ClassTypeBadge";

const VideoCard = ({
  title,
  link,
  instructors,
  difficulty,
  duration,
  image,
  type,
  variant,
  ...rest
}) => {
  return (
    <CardWrapper
      {...{ title }}
      {...{ image }}
      {...{ link }}
      alt={title}
      className={variant ? variant : "default"}
      {...rest}
    >
      <CardHeader>
        <div>
          <ClassTypeBadge {...{ type }} />
        </div>
      </CardHeader>
      <CardFooter>
        <Title>{title}</Title>
        <Details>
          {instructors.map((el, index) => (
            <span key={`instructor-${index + 1}`}>{el.name}</span>
          ))}
          <span>{difficulty}</span>
          <span>{duration}</span>
        </Details>
      </CardFooter>
    </CardWrapper>
  );
};

VideoCard.defaultProps = {
  title: "",
  link: "/",
  difficulty: "Beginner",
  duration: "",
  type: "follow",
  image: "",
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  difficulty: PropTypes.string,
  duration: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default VideoCard;

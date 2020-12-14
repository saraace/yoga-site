import { Container } from "theme-ui";
import Profile from "../components/Profile";

const Account = () => {
  const plan = {
    title: "Mobile Only",
    price: "$7.99/Mo",
    features: ["Access to all on-demand classes", "Access to live web classes"],
  };

  const paymentDetails = {
    cardNumber: "**** **** **** 6478",
    expDate: "05/22",
  };

  const stats = [
    {
      title: "Total Workout Duration",
      metric: "860",
      unit: "min",
    },
    {
      title: "Workouts Completed",
      metric: "127",
    },
    {
      title: "Calories Burned",
      metric: "154800",
      unit: "kcal",
    },
  ];

  const achievements = [
    {
      image: "/images/badges/day-1.png",
    },
    {
      image: "/images/badges/day-3.png",
    },
    {
      image: "/images/badges/day-10.png",
    },
    {
      image: "/images/badges/40-hours.png",
    },
    {
      image: "/images/badges/schedule-workout.png",
    },
  ];

  return (
    <Container>
      <Profile {...{ plan, paymentDetails, stats, achievements }} />
    </Container>
  );
};

export default Account;

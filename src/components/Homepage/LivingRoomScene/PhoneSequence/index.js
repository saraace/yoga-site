/* COMPONENTS */
import DesktopScene from "./Desktop";
import MobileScene from "./Mobile";
import StaticScene from "./Static";

const PhoneSequence = ({ staticScenes, isMobile, ...rest }) => {
  const leftContent = () => {
    return (
      <>
        <p>Live or on-demand.</p>
        <h2>Online classes featuring live instructor feedback.</h2>
      </>
    );
  };

  const rightContent = () => {
    return (
      <>
        <h2>Your virtual fitness studio.</h2>
        <p>You can also book classes to go to your local Yoga studio and workout together.</p>
      </>
    );
  };

  return (
    <>
      {!staticScenes && !isMobile && (
        <DesktopScene {...{ leftContent: leftContent(), rightContent: rightContent() }} {...rest} />
      )}
      {!staticScenes && isMobile && (
        <MobileScene {...{ leftContent: leftContent(), rightContent: rightContent() }} {...rest} />
      )}
      {staticScenes && <StaticScene {...{ leftContent: leftContent(), rightContent: rightContent() }} />}
    </>
  );
};

export default PhoneSequence;

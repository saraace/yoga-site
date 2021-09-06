/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { Scene, SceneContainer, Col, Video, ImageCol, Model } from "./styles";

const LocationsScene = ({ isMobile }) => {
  return (
    <Scene>
      <div>
        <SceneContainer>
          <Col>
            <div>
              <h3>Locations</h3>
              <h2>Visit one of our studio locations today.</h2>
              <Link href="/locations">
                <a sx={{ variant: "buttons.primary" }}>Get Started</a>
              </Link>
              <Video>
                {!isMobile && <img src="/images/homepage/locations/video.jpg" />}
                {isMobile && <img src="/images/homepage/locations/mobile-video.jpg" />}
              </Video>
              <p>
                Over the last 10 years, Yoga has grown from a single studio location to one of the fastest-growing and
                most successful yoga &amp; fitness studio franchises in south Florida.
              </p>
            </div>
          </Col>
        </SceneContainer>
        <ImageCol>
          <Model src="/images/homepage/locations/model.png" />
        </ImageCol>
      </div>
    </Scene>
  );
};

export default LocationsScene;

import { useState, useEffect } from "react";
import { Container } from "theme-ui";
import LibraryTopRow from "../components/LibraryTopRow";
import MasonryLayout from "../containers/CardLayouts/MasonryLayout";
import GridLayout from "../containers/CardLayouts/GridLayout";
import SlidingLayout from "../containers/CardLayouts/SlidingLayout";
import ClassCard from "../components/Cards/ClassCard";
//import { ALL_VIDEOS_QUERY } from "../apollo/queries/videos";
//import { useQuery } from "@apollo/client";
//import VideoCard from "../components/Cards/VideoCard";

const Classes = () => {
  /* const {
    loading: loadingVideos,
    error: errorVideos,
    data: allVideos,
  } = useQuery(ALL_VIDEOS_QUERY); */

  const tabs = ["On-Demand", "Live", "Local"];
  const subTabs = {
    "On-Demand": ["Individual Classes", "Programs"],
    Local: [
      "Ft. Lauderdale",
      "Boca Raton",
      "Davie",
      "South Miami",
      "Pembroke Pines",
    ],
  };

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubTab, setActiveSubTab] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (subTabs.hasOwnProperty(activeTab)) {
      setActiveSubTab(subTabs[activeTab][0]);
    }
  }, [activeTab]);

  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

  const onApplyFilters = (activeFilters) => {
    console.log(activeFilters);
    setFilters(activeFilters);
  };

  const classes = [
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-01.png",
      link: "/classes/1",
    },
    {
      title: "Cardio",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-02.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-03.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-01.png",
      link: "/classes/1",
    },
    {
      title: "Cardio",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-02.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-03.png",
      link: "/classes/1",
    },
    {
      title: "Cardio",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-02.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-03.png",
      link: "/classes/1",
    },
    {
      title: "Cardio",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-02.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-03.png",
      link: "/classes/1",
    },
    {
      title: "Cardio",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-02.png",
      link: "/classes/1",
    },
    {
      title: "Workout Name",
      instructor: "Teacher",
      difficulty: "Advanced",
      duration: "20 mins",
      type: "follow",
      date: "Mon, July 25th",
      time: "10:15pm",
      image: "/images/classes/image-03.png",
      link: "/classes/1",
    },
  ];

  return (
    <>
      <LibraryTopRow
        {...{
          tabs,
          activeTab,
          onTabClick,
          subTabs,
          activeSubTab,
          onSubTabClick,
          filters,
          onApplyFilters,
        }}
      />
      <Container variant="no-gutters">
        {activeTab === tabs[0] && activeSubTab === subTabs[activeTab][0] && (
          <>
            <MasonryLayout exit={{ opacity: 0 }}>
              {classes.map((c, i) => (
                <ClassCard key={i} {...c} className="tall" />
              ))}
            </MasonryLayout>
          </>
        )}
        {/* activeTab === tabs[0] && activeSubTab === subTabs[activeTab][0] && (
          <>
            {loadingVideos ? (
              <div>Loading</div>
            ) : (
              <MasonryLayout>
                {allVideos.videos &&
                  allVideos.videos.length &&
                  allVideos.videos.map((v) => (
                    <VideoCard
                      key={v.uuid}
                      className="tall"
                      title={v.name}
                      link={v.media_url}
                      difficulty={v.difficulty || "Beginner"}
                      instructors={v.instructors}
                      type={v.type}
                      image={v.thumbnail_url}
                      duration={`${v.length}min`}
                    />
                  ))}
              </MasonryLayout>
            )}
          </>
        ) */}
        {activeTab === tabs[0] && activeSubTab === subTabs[activeTab][1] && (
          <>
            <SlidingLayout
              title={`My programs`}
              height={[192, null, null, 300]}
            >
              {classes.map((c, i) => {
                return <ClassCard key={"card" + i} {...c} className="large" />;
              })}
            </SlidingLayout>
            <MasonryLayout title={`Available Programs`}>
              {classes.map((c, i) => (
                <ClassCard key={"test" + i} {...c} className="tall" />
              ))}
            </MasonryLayout>
          </>
        )}
        {activeTab === tabs[1] && (
          <>
            <SlidingLayout title={`My Scheduled Classes`}>
              {classes.map((c, i) => {
                return <ClassCard key={i} {...c} />;
              })}
            </SlidingLayout>
            <GridLayout title={`Monday, October 27th`}>
              {classes.map((c, i) => (
                <ClassCard key={i} {...c} className="tall" />
              ))}
            </GridLayout>
          </>
        )}
        {activeTab === tabs[2] && (
          <>
            <SlidingLayout title={`Monday, October 27th`}>
              {classes.map((c, i) => {
                return <ClassCard key={i} {...c} />;
              })}
            </SlidingLayout>
            <SlidingLayout title={`Monday, October 28th`}>
              {classes.map((c, i) => {
                return <ClassCard key={i} {...c} />;
              })}
            </SlidingLayout>
            <SlidingLayout title={`Monday, October 29th`}>
              {classes.map((c, i) => {
                return <ClassCard key={i} {...c} />;
              })}
            </SlidingLayout>
          </>
        )}
      </Container>
    </>
  );
};

export default Classes;

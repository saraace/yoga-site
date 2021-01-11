import { gql } from "@apollo/client";

export const ALL_VIDEOS_QUERY = gql`
  {
    videos {
      uuid
      name
      type
      difficulty
      length
      media_url
      thumbnail_url
      instructors {
        name
      }
    }
  }
`;

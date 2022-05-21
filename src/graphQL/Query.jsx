import { gql } from "@apollo/client";

export const GET_ANIME_QUERY = gql`
  query ($search: String!) {
    Media(search: $search, type: ANIME) {
      id
      title {
        romaji
        english
      }
      status
      description
      averageScore
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      coverImage {
        large
      }
      genres
      siteUrl
      episodes
      season
      format
    }
  }
`;

export const GET_ANILIST_USER_QUERY = gql`
  query ($name: String, $type: MediaType) {
    MediaListCollection(
      userName: $name
      type: $type
    ) {
      lists {
        name
        entries {
          id
          media {
            title {
              romaji
              english
            }
            coverImage {
              medium
              large
            }
            genres
            siteUrl
          }
        }
        isCustomList
      }
    }
  }
`;

export const GET_ANILIST_SEARCH_QUERY = gql`
  query ($page: Int, $search: String) {
    Page(page: $page) {
      pageInfo {
        hasNextPage
      }
      media(search: $search sort: POPULARITY_DESC) {
        type
        id
        title {
          romaji
          english
        }
        coverImage{
            large
            medium
        }
        siteUrl
      }
    }
  }
`;

import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Anims = () => {
  return (
    <Query
      query={gql`
        query ($id: Int, $page: Int, $perPage: Int, $search: String) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            media(id: $id, search: $search) {
              id
              title {
                romaji
              }
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
          
        if (loading) {
          return <p>loading...</p>;
        }
        if (error) {
          return <p>wtf is error {error.message}</p>;
        }

        if (data) {
          console.log(data);
          {/* return <p>{data.Media.title.english}</p>; */}
        }
      }}
    </Query>
  );
};

export default Anims;

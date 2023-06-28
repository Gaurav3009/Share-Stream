import React, {useEffect, useState} from 'react';
import { useApolloClient, gql } from "@apollo/client";
import Options from './Options';
import Explore from './Explore';
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #1a1936;
  color: white;
`;


function Home() {
    // Creating a state to store the uploaded video
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        console.log(videos);
    }, [videos]);
  
    // Get the client from the useApolloClient hook
    const client = useApolloClient();
  
    // Query the videos from the the graph
    const GET_VIDEOS = gql`
      query videos(
        $first: Int
        $skip: Int
        $orderBy: Video_orderBy
        $orderDirection: OrderDirection
        $where: Video_filter
      ) {
        videos(
          first: $first
          skip: $skip
          orderBy: $orderBy
          orderDirection: $orderDirection
          where: $where
        ) {
          id
          has
          title
          description
          location
          category
          thumbnailHash
          date
          author
          createdAt
        }
      }
    `;
  
    // Function to get the videos from the graph
    const getVideos = async () => {
      // Query the videos from the graph
      client
        .query({
          query: GET_VIDEOS,
          variables: {
            first: 200,
            skip: 0,
            orderBy: "createdAt",
            orderDirection: "desc",
          },
          fetchPolicy: "network-only",
        })
        .then(({ data }) => {
          // Set the videos to the state
          setVideos(data.videos);
          console.log(data);
        })
        .catch((err) => {
          alert("Something went wrong. please try again.!", err.message);
          console.log(err);
        });
    };
  
    useEffect(() => {
      // Runs the function getVideos when the component is mounted
      getVideos();
    }, []);
    return (
      <Section>
        <Options/>
        <Explore/>
      </Section>
    );
}

export default Home;



{/* <div>
        <div>
          <div>
            {videos.map((video) => (
              <div>
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
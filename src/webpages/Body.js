import React from 'react';
import LandingPage from './LandingPage';
import { LivepeerConfig } from '@livepeer/react';
import LivePeerClient from '../livepeer';
import { ApolloProvider } from "@apollo/client";
import client from "../Client";
import Home from "./Home";
import Profile from './Profile';
import UploadPage from './UploadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoContainer from './VideoContainer';

function Body() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path = "/home" element = {
          <ApolloProvider client={client}>
            <Home/>
          </ApolloProvider>
        }>
        </Route>
        <Route path = "/profile" element = {
          <Profile/>
        }></Route>
        <Route path = "/upload" element = {
          <LivepeerConfig client = {LivePeerClient}>
            <UploadPage/>
          </LivepeerConfig>
        }></Route>
        <Route path = "/player" element = {<VideoContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Body
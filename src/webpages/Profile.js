import React from 'react';
import Options from './Options';
import Details from './Details';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: #1a1936;
    color: white;
`;

function Profile() {
  return (
    <Section>
        <Options/>
        <Details/>
    </Section>
  )
}

export default Profile
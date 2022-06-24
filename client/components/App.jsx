import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Recognizer from './recognizer/Recognizer.jsx';
import Theme from './theme/Theme.jsx'
import TopUsed from './topUsed/TopUsed.jsx'
import { MainContainer, CustomizeButton, TopMenu, AppContainer } from '../styles/styles.js'



// const AppContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;

// `
const App = (props) => {
	const [record, setRecord] = useState({});
	const [records, setRecords] = useState([]);
	const [useCount, setUseCount] = useState(0);


	// useEffect(() => {
    
	// }, []);

  const getRecord = (emotion) => {
    axios.get('/get-record')
    .then(() => {
      console.log('get-record WORKS!!')
      // .then(({data}) => {
      //   setRecord(data)
      // });
      })
  }
  const postRecord = () => {
    axios.post('/add-record')
    .then(() => {
      console.log('add-record WORKS!!')
      })
  }

	return (
    <MainContainer>
      {/* <div className="menu-area">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a>
            <ul className="dropdown-1">
              <li><a href="#">service one</a></li>
              <li><a href="#">service two</a></li>
              <li><a href="#">service three</a>
                <ul className="dropdown-2">
                  <li><a href="#">service four</a></li>
                  <li><a href="#">service five</a></li>
                  <li><a href="#">service six</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Porfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="banner-area">
      <h1>Banner Text</h1>
      </div> */}
      <TopMenu>
        <CustomizeButton>Customize</CustomizeButton>
        <CustomizeButton>Express your self</CustomizeButton>
        <CustomizeButton>Top used</CustomizeButton>
        <CustomizeButton>Contact</CustomizeButton>
        <CustomizeButton>Sign up</CustomizeButton>
      </TopMenu>

      <AppContainer>
        <Recognizer/>
      <h1>Moody is Alive!</h1>

        <Theme/>
        <TopUsed/>
      </AppContainer>

    </MainContainer>
    // <div>


    // </div>
	);
};


export default App;


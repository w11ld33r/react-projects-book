import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Profile from './Profile';
import Header from '../components/Header/Header';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

const AppWrapper = styled.div`
	text-align: center;
`;

function App() {
  return (
	<React.Fragment>
		<GlobalStyle />
		<AppWrapper>
			<Header />
			<Profile />
		</AppWrapper>
	</React.Fragment>
  );
}

export default App;

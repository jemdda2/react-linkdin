import React from 'react';
import styled from 'styled-components/macro';

function Login() {
	return (
		<LoginContainer>
			<img 
				src="https://www.brandeps.com/logo-download/L/Linkedin-logo-vector-01.svg"
				alt=""
			/>
			<form>
				<input placeholder="Full name (required if registering" type="text" />
			</form>
		</LoginContainer>
	)
}

export default Login;

const LoginContainer = styled.div`
	display: grid;
	place-items: center;
	margin-left: auto;
	margin-right: auto;
	padding-top: 100px;
	padding-bottom: 100px;
`;

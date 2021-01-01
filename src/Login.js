import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase/firebase';
import styled from 'styled-components/macro';
import { login } from './features/userSlice';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then(userAuth => {
				dispatch(login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: userAuth.user.displayName,
					profileUrl: userAuth.user.photoURL,
				}))
			}).catch(error => alert)
	}

	const register = () => {
		if (!name) {
			return alert("Please enter a full name!");
		}

		auth.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user.updateProfile({
					displayName: name,
					photoUrl: profilePic,
				})
				.then(() => {
					dispatch(login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: name,
						photoUrl: profilePic,
					}))
				})
			})
			.catch((error) => alert(error));
	}
	
	return (
		<LoginContainer>
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/268px-LinkedIn_Logo_2013.svg.png"
				alt=""
			/>
			<form>
				<input 
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="Full name (required if registering)" 
					type="text" 
				/>
				<input 
					value={profilePic}
					onChange={e => setProfilePic(e.target.value)}
					placeholder="Profile pic URL (optional)" 
					type="text" 
				/>
				<input 
					value={email} 
					onChange={e => setEmail(e.target.value)} 
					placeholder="Email" 
					type="email" 
				/>
				<input 
					value={password} 
					onChange={e => setPassword(e.target.value)} 
					placeholder="Password" 
					type="password" 
				/>
				<button type="submit" onClick={loginToApp}>Sign in</button>
			</form>
			<p>Not a member?{" "}
				<LoginRegister onClick={register}>Register Now</LoginRegister>
			</p>
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

	& img {
		object-fit: contain;
		height: 70px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	& form {
		display: flex;
		flex-direction: column;
		& input {
			width: 350px;
			height: 50px;
			font-size: 20px;
			padding-left: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
		}
		& button {
			width: 365px;
			height: 50px;
			font-size: large;
			color: #fff;
			background-color: #0074b1;
			border-radius: 5px;
		}
	}
	p {
		margin-top: 20px;
	}
`;

const LoginRegister = styled.span`
	color: #0177b7;
	cursor: pointer;
`;

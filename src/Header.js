import React from 'react'
import styled from 'styled-components/macro';
// Icon
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase/firebase';

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	}

	return (
		<HeaderContainer>
			<HeaderLeft>
				<img 
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""
				/>
				<HeaderSearch>
					<SearchIcon />
					<input type="text" />
				</HeaderSearch>
			</HeaderLeft>
			<HeaderRight>
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption 
					avatar={true}
					title="me" 
					onClick={logoutOfApp}	
				/>
			</HeaderRight>

		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	background-color: white;
	justify-content: space-evenly;
	border-bottom: 0.1px solid lightgray;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 100%;
	z-index: 999;
`;

const HeaderLeft = styled.div`
	display: flex;

	& img {
		object-fit: contain;
		height: 40px;	
		margin-right: 10px;
	}
`;

const HeaderSearch = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	height: 22px;
	color: gray;
	background-color: #eef3f8;

	& input {
		outline: none;
		border: none;
		background: none;
	}
`;

const HeaderRight = styled.div`
	display: flex;
`;
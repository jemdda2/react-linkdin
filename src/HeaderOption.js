import React from 'react'
import styled from 'styled-components/macro';
import { Avatar } from "@material-ui/core";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onClick }) {
	const user = useSelector(selectUser);

	return (
		<HeaderOptionContainer onClick={onClick}>
			{Icon && <Icon className="headerOption__icon"/>}
			{avatar && (
				<Avatar className='headerOption__icon' src={user?.email[0]}>{user?.email[0]}</Avatar>
			)}
			<h3>{title}</h3>
		</HeaderOptionContainer>
	)
}

export default HeaderOption

const HeaderOptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	color: gray;
	cursor: pointer;

	& h3 {
		font-size: 12px;
		font-weight: 400;
	}

	&:hover {
		color: black;
	}

	.headerOption__icon {
		object-fit: contain;
		height: 25px;
		width: 25px;
	}
`;

// const = styled(Icon)`

// `
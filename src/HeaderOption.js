import React from 'react'
import styled from 'styled-components/macro';
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<HeaderOptionContainer>
			{Icon && <Icon className="headerOption__icon"/>}
			{avatar && (
				<Avatar className='headerOption__icon' src={avatar}/>
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
import React from 'react'
import styled from 'styled-components/macro';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

	const newsArticle = (heading, subtitle) => (
		<WidgetsArticle>
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</WidgetsArticle>
	)

	return (
		<WidgetsContainer>
			<WidgetsHeader>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</WidgetsHeader>
			{newsArticle("Jisoon is back", "Top news - 9099 readers")}
			{newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
			{newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
			{newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
			{newsArticle("Is Redux too good?", "Code - 123 readers")}
		</WidgetsContainer>
	)
}

export default Widgets

const WidgetsContainer = styled.div`
	position: sticky;
	top: 80px;
	flex: 0.2;
	background-color: white;
	border-radius: 10px;
	border: 1px solid lightgray;
	height: fit-content;
	padding-bottom: 10px;

	h2 {
		font-size: 16px;
		font-weight: 400;
	}
`;

const WidgetsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

const WidgetsArticle = styled.div`
	display: flex;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: whitesmoke;
	}

	.widgets__articleLeft {
		color: #0177b7;
		margin-right: 5px;

		.MuiSvgIcon-root {
			font-size: 15px;
		}
	}

	.widgets__articleRight {
		flex: 1;

		h4 {
			font-size: 14px;
		}

		p {
			font-size: 12px;
			color: gray;
		}
	}
`;
import React from 'react'
import styled from 'styled-components/macro';
import { Avatar } from '@material-ui/core';

function Sidebar() {

	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)

	return (
		<SidebarContainer>
			<SidebarTop>
				<img src="https://stillmedab.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg?interpolation=lanczos-none&fit=around|1060:600&crop=1060:600;*,*" alt=""/>
				<Avatar className="sidebar__avatar"/>
				<h2>Jisoon Kim</h2>
				<h4>siriusda2@naver.com</h4>
			</SidebarTop>
			<SidebarStats>
				<SidebarStat>
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
				</SidebarStat>
				<SidebarStat>
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,448</p>
				</SidebarStat>
			</SidebarStats>
			<SidebarBotton>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</SidebarBotton>
		</SidebarContainer>
	)
}

export default Sidebar

const SidebarContainer = styled.div`
	position: sticky;
	top: 80px;
	flex: 0.2;
	border-radius: 10px;
	text-align: center;
	height: fit-content;
`

const SidebarTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid lightgray;
	border-bottom: 0;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: white;
	padding-bottom: 10px;

	& img {
		margin-bottom: -20px;
		width: 100%;
		height: 60px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		object-fit: cover;
	}

	.sidebar__avatar {
		margin-bottom: 10px;
	}

	h2 {
		font-size: 18px;
	}

	h4 {
		color: gray;
		font-size: 12px;
	}

`

const SidebarStats = styled.div`
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid lightgray;
	background-color: white;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`

const SidebarStat = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;

	p {
		color: gray;
		font-size: 13px;
		font-weight: 600;
	}

	.sidebar__statNumber {
		font-weight: bold;
		color: #0a66c2;
	}
`

const SidebarBotton = styled.div`
	text-align: left;
	padding: 10px;
	border: 1px solid lightgray;
	background-color: white;
	border-radius: 10px;
	margin-top: 10px;
	
	.sidebar__recentItem {
		display: flex;
		font-size: 13px;
		color: gray;
		font-weight: bolder;
		cursor: pointer;
		padding: 5px;
	}

	.sidebar__recentItem:hover {
		background-color: whitesmoke;
		border-radius: 10px;
		cursor: pointer;
		color: black;
	}

	.sidebar__hash {
		margin-right: 10px;
		margin-left: 5px;
	}

	p {
		font-size: 13px;
		padding-bottom: 10px;
	}
`
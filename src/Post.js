import React, { forwardRef } from 'react'
import styled from 'styled-components/macro';
import { Avatar } from "@material-ui/core";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<PostContainer ref={ref}>
			<PostHeader>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<PostInfo>
					<h2>{name}</h2>
					<p>{description}</p>
				</PostInfo>
			</PostHeader>
			<PostBody>
				<p>{message}</p>
			</PostBody>
			<PostButtons>
				<InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
				<InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
				<InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
				<InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
			</PostButtons>
		</PostContainer>
	)
})

export default Post

const PostContainer = styled.div`
	background-color: white;
	padding: 15px;
	margin-bottom: 10px;
	border-radius: 10px;
`;

const PostHeader = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

const PostInfo = styled.div`
	margin-left: 10px;

	p {
		font-size: 12px;
		color: gray;
	}

	h2 {
		font-size: 15px;
	}
`;

const PostBody = styled.div`
	overflow-wrap: anywhere;
`;

const PostButtons = styled.div`
	display: flex;
	justify-content: space-evenly

`;
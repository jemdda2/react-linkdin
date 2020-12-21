import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase/firebase';
import firebase from 'firebase'

function Feed() {
	const [input, setInput] = useState('')
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		db.collection("posts").onSnapshot(snapshot => (
			setPosts(snapshot.docs.map(doc => (
				{
					id: doc.id,
					data: doc.data(),
				}))
			)
		))
	}, [])

	const sendPost = e => {
		e.preventDefault();

		db.collection('posts').add({
			name: 'Jisoon Kim',
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<FeedContainer>
			<FeedInputContainer>
				<FeedInput>
					<CreateIcon />
					<form>
						<input value={input} onChange={e => setInput(e.target.value)} type="text" />
						<button onClick={sendPost} type="submit">Send</button>
					</form>
				</FeedInput>
				<FeedInputOptions>
					<InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
					<InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
					<InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
					<InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
				</FeedInputOptions>
			</FeedInputContainer>

			{posts.map(({ id, data: { name, description, message, photoUrl }}) => 
			(
				<Post 
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</FeedContainer>
	)
}

export default Feed;

const FeedContainer = styled.div`
	flex: 0.6;
	margin: 0 20px;
`;

const FeedInputContainer = styled.div`
	background-color: white;
	padding: 10px;
	padding-bottom: 20px;
	border-radius: 10px;
	margin-bottom: 20px;
`;

const FeedInput = styled.div`
	border: 1px solid lightgray;
	border-radius: 30px;
	display: flex;
	padding: 10px;
	color: gray;
	padding-left: 15px;

	form {
		display: flex;
		width: 100%;
	}

	form > input {
		border: none;
		flex: 1;
		margin-left: 10px;
		outline-width: 0;
		font-weight: 600;
	}

	form > button {
		display: none;
	}
`;

const FeedInputOptions = styled.div`
	display: flex;
	justify-content: space-evenly;

`;
import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic='https://www.educima.com/dibujo-para-colorear-sherlock-holmes-dm23032.jpg'
                message="Working"
                timestamp="Atimestap"
                username="Aleeee"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            />
            <Post 
                profilePic='https://www.educima.com/dibujo-para-colorear-sherlock-holmes-dm23032.jpg'
                message="Working"
                timestamp="Atimestap"
                username="Aleeee"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            />
            <Post 
                profilePic='https://www.educima.com/dibujo-para-colorear-sherlock-holmes-dm23032.jpg'
                message="Working"
                timestamp="Atimestap"
                username="Aleeee"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            />
        </div>
    )
}

export default Feed

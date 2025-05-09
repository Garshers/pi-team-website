import React from 'react';
import './homePageStyle.css';
import Gallery from '../../Gallery/Gallery';

import MainVideo from "../../../assets/MainVideo.mp4";

const photoDataContent = [
    { id: '1', image: 'https://plus.unsplash.com/premium_photo-1680555225031-5a2559c99e75?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', image: 'https://images.unsplash.com/photo-1741851374721-a546dc41561a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', image: 'https://images.unsplash.com/photo-1519455953755-af066f52f1a6?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', image: 'https://images.unsplash.com/photo-1742155032253-744e8adaafc8?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '5', image: 'https://images.unsplash.com/photo-1742626157103-76367e3798bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', image: 'https://images.unsplash.com/photo-1729274642275-c5abcb52183d?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '7', image: 'https://plus.unsplash.com/premium_photo-1681930071839-e5fbf9fae636?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '8', image: 'https://plus.unsplash.com/premium_photo-1666820202651-314501c88358?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

function HomePage() {
    return (
        <div className="mainBox">
            <div className='mainVideoContainer'>
                <video
                    src={MainVideo}
                    autoPlay
                    loop
                    muted
                    className="mainVideoStyle"
                />
            </div>

            <Gallery photos={photoDataContent} />
        </div>
    );
}

export default HomePage;
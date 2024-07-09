import React from 'react'
import NavBar from '../../component/Navigation/NavBar';
import LeftPane from '../../component/LeftPane_/LeftPane';
import PostPane from '../../component/PostPane_/PostPane';
import RightPane from '../../component/RightPane_/RightPane';
import "./home.css";



export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bottomContainer">
      <LeftPane/>
      <PostPane/>
      <RightPane/>
      
      </div>

      
    </div>
  )
}

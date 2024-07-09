import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "./navbar.css";

export default function NavBar() {
  return (
      <div className="navBarBox">
      
        <div className="navBarLeft">
           <div className="logoIcon">
                <FacebookIcon className='logo'></FacebookIcon>
            </div> 
            <div className="searchBarBox">
                <SearchIcon className='searchIcon' />
                <input placeholder="Search fakebook" className="searchInput" />
            </div>
        </div>

        <div className="navBarCenter">
            <div className="centerIcons">
                <HomeRoundedIcon></HomeRoundedIcon>
            </div>
            <div className="centerIcons">
                <OndemandVideoRoundedIcon></OndemandVideoRoundedIcon>
            </div>
            <div className="centerIcons">
                <StoreRoundedIcon></StoreRoundedIcon>
            </div>
            <div className="centerIcons">
                <GroupsRoundedIcon></GroupsRoundedIcon>
            </div>
            <div className="centerIcons">
                <MenuRoundedIcon></MenuRoundedIcon>
            </div>
            
        </div>
        

        <div className="navBarRight">
            
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <WidgetsRoundedIcon></WidgetsRoundedIcon>
                   
                </div>
                <div className="navBarIcon">
                    <MessageIcon></MessageIcon>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <NotificationsRoundedIcon></NotificationsRoundedIcon>
                    <span className="iconTag">2</span>
                </div>

            </div>
            <div className="pic">
                <img src="/images/1.jpg" alt="" className="profilePic" />
            </div>
        </div>
      </div>


  )
}

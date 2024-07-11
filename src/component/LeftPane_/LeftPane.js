import React from 'react'
import "./leftpane.css"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Groups2Icon from '@mui/icons-material/Groups2';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function LeftPane() {
  return (

      <div className='leftPaneBox'>
        <div className="leftpaneContainer">
            <div className="leftPaneMenu">
              <li className="leftpanemenuitem">
                <img src="/images/1.jpg" alt="" className="profilePic" />
                <span className="leftPaneMenuText">Dinithi Madushika</span>
              </li>
              <li className="leftpanemenuitem">
                <PeopleAltIcon className='leftpanemenuicon1'></PeopleAltIcon>
                <span className="leftPaneMenuText">Friends</span>
              </li>
              <li className="leftpanemenuitem">
                <AccessTimeIcon className='leftpanemenuicon2'></AccessTimeIcon>
              <span className="leftPaneMenuText">Memories</span>
              </li>
              <li className="leftpanemenuitem">
               <BookmarkIcon className='leftpanemenuicon3'></BookmarkIcon>
              <span className="leftPaneMenuText">Saved</span>
              </li>
              <li className="leftpanemenuitem">
                <Groups2Icon className='leftpanemenuicon4'></Groups2Icon>
              <span className="leftPaneMenuText">Groups</span>
              </li>
              <li className="leftpanemenuitem">
                <OndemandVideoIcon className='leftpanemenuicon5'></OndemandVideoIcon>
              <span className="leftPaneMenuText">Video</span>
              </li>
              <li className="leftpanemenuitem">
                <ArrowCircleDownIcon className='leftpanemenuicon6'></ArrowCircleDownIcon>
              <span className="leftPaneMenuText">See more</span>
              </li>
              <hr></hr>
              <div className="shortcuts">
                <span className="shortcutText">Your shortcuts</span>
              </div>
              <div className="shortcutpages">
                <li className="pageListItem">
                  <img src="/images/2.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Flower shop</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/3.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Beauty Saloon</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/4.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Buy Cake</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/5.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Maths Api</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/2.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Flower shop</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/3.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Beauty Saloon</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/4.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Buy Cake</span>
                </li>
                <li className="pageListItem">
                  <img src="/images/5.jpg" alt="" className="pagePics" />
                  <span className="pageNamesText">Maths Api</span>
                </li>
              </div>
            </div>
        </div>
      </div>
      

  )
}

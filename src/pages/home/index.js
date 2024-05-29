import React from 'react'
import SideBar from '../../components/SideBar/index.js'
import Topbar from '../../components/TopBar/index.js'

function HomeScreen() {
  return (
    <div className="h-screen flex">
    <SideBar />
    <div className="flex-1">
        <Topbar />
        
      </div>
  </div>
  )
}

export default HomeScreen
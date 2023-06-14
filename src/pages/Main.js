import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Main = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
  return (
    <div>
        <Header toggleDrawer={toggleDrawer} />
        <SideBar open={open} />
    </div>
  )
}

export default Main
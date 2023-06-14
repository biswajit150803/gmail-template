import React from "react";
import { AppBar, Toolbar, styled,InputBase,Box } from "@mui/material";
import { Menu as MenuIcon,Search,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined } from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";
const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});
const SearchWrapper=styled(Box)({
    background:"#EAF1FB",
    marginLeft:"1vw",
    borderRadius:"5px",
    minWidth:"30vw",
    maxWidth:"40vw",
    height:"5vh",
    display:"flex",
    alignItems:"center",    
    justifyContent:"space-between",
    padding:"0 1vw"
})
const OptionsWrapper=styled(Box)({
    display:"flex",
    width:"100%",
    justifyContent:"flex-end",
    '& > svg':{
        marginLeft:"2vw"
    }
})
const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} style={{cursor:"pointer"}} />
        <img src={gmailLogo} alt="image" style={{width:"10vw",marginLeft:"3vw",height:"4.5vh"}} />
        <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search mail" style={{width:"25vw"}} />
            <Tune color="action" />
        </SearchWrapper>
        <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

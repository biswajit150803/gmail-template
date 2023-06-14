import React from "react";
import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";
const SideBar = ({ open }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          background: "#F5F5F5",
          mt: "8.5vh",
          width: "20vw",
          borderRight: "none",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;

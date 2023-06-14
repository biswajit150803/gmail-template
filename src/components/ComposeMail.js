import React from "react";
import {
  Dialog,
  Box,
  styled,
  Typography,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";

const dialogueStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px 10px 0 0",
  boxShadow: "none",
};
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "1vh 1.2vw",
  background: "#f2fefc",
  "& > p": {
    fontSize: "2vh",
    fontWeight: 500,
  },
});
const RecipientWrapper = styled(Box)({
  padding: "0 1vw",
  "& > div": {
    fontSize: "2vh",
    borderBottom: "1px solid #f5f5f5",
    marginTop: "1vh",
  },
});
const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "1vh 1.2vw",
  alignItems: "center",
});
const SendButton = styled(Button)({
  background: "#0B35D0",
  color: "white",
  fontWeight: "500",
  textTransform: "none",
  borderRadius: "15px",
  width: "10vw",
});
const ComposeMail = ({ open, setOpen }) => {
    const [data,setData]=React.useState({});
  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: "2525",
  };
  const closeCompose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const sendmail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "theghoshs50@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert("message sent successfully")).catch((err)=>console.log(err));
    }
    setOpen(false);
  };
  const deleteMail = () => {
    setOpen(false);
  };
  const OnValueChnage = (e) => {
    setData({...data,[e.target.name]:e.target.value});
    console.log(data)
    console.log(e.target.value);
  };
  return (
    <Dialog open={open} PaperProps={{ sx: dialogueStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close
          fontSize="small"
          onClick={(e) => closeCompose(e)}
          style={{ cursor: "pointer" }}
        />
      </Header>
      <RecipientWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          fullWidth
          onChange={(e) => OnValueChnage(e)}
        />
        <InputBase placeholder="Subject" name="subject" fullWidth onChange={(e)=>OnValueChnage(e)} />
      </RecipientWrapper>
      <TextField
        name="body"
        multiline
        rows={20}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        onChange={(e) => OnValueChnage(e)}
      />
      <Footer>
        <SendButton onClick={(e) => sendmail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => deleteMail()} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;

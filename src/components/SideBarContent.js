import React from 'react'
import {Box,Button,styled,List,ListItem, Container} from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';

const SideBarContent = () => {
    const [open, setOpen] = React.useState(false);
    const onComposeClick=()=>{
        setOpen(true);
    }
    const ComposeButton=styled(Button)({
        background:"#c2e7ff",
        color:"#001d35",
        padding:"1.5vh 1.5vw",
        borderRadius:"9px",
        // marginLeft:"1vw",
        textTransform:'capitalize',
        minWidth:"10vw",
    })
const Container=styled(Box)({
   padding:"1vw",
   '& ul':{
    padding:"1vh 0 0 0.6vw",
    fontSize:"2vh",
    fontWeight:500,
    cursor:"pointer",
    '& > li > svg':{
        marginRight:"1vw"
    }
   }
})
  return (
    <Container>
            <ComposeButton onClick={()=>onComposeClick()}>
            <CreateOutlined />
                Compose
            </ComposeButton>
        <List>
            {SIDEBAR_DATA.map((data,index)=>(
                <ListItem key={index} >
                <data.icon fontSize='sm'/>
                {data.title}
                </ListItem>
            ))}
        </List>
        <ComposeMail open={open} setOpen={setOpen}/> 
    </Container>
  )
}

export default SideBarContent
import { Fab, styled, Box, Input } from "@mui/material";
import { ContactSupport, Close, ArrowForward } from '@mui/icons-material';

export const ChatSupport = styled(Fab)({
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
})

export const ChatIcon = styled(ContactSupport)({

})

export const CloseIcon = styled(Close)({
    cursor: 'pointer',
    marginRight: 5,
    marginTop: 5
})

export const SubmitIcon = styled(ArrowForward)({
    cursor: 'pointer',
    marginRight: 5,
    marginTop: 5
})

export const ChatBox = styled(Box)({
    height: '50vh',
    width: '30vw',
    border: '2px solid black',
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'grey'
})

export const ChatBoxHeader = styled(Box)({
    height: '5vh',
    borderBottom: '2px solid black',
    display: 'flex',
    justifyContent: 'flex-end'
})

export const ChatBoxArea = styled(Box)({
    height: '80%',
})

export const ChatBoxInput = styled(Input)({
    height: '5vh',
    borderTop: '2px solid black',
    backgroundColor: 'white'
})
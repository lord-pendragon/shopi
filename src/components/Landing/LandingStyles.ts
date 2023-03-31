import { Box, styled, Typography, Grid } from "@mui/material";


export const MainHeading = styled(Typography)({
	color: "green"
})

export const Landing = styled(Box)({
    
})

export const SplashImage = styled(Box)({
    height: '25vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    // backgroundColor: 'lime'
})

export const DealCards = styled(Grid)({
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
})

export const DealCard = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: 10,
    height: '10vh',
    marginLeft: 15,
    marginRight: 15
})

export const DealImages = styled(Grid)({
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    
})

export const DealImage = styled(Grid)({
    marginLeft: 10,
    marginRight: 10,
    height: "40vh", 
    width: "100%",
    // backgroundColor: 'cyan',
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid black',
    alignItems: 'center'
})

export const AllItems = styled(Grid)({
    padding: 10,
    
})

export const AllItemsRow = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
})

export const AllItem = styled(Grid)({
    margin: 10,
    padding: 100,
    border: '2px solid black',
    // backgroundColor: 'purple'
})
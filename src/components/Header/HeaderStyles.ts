import { Box, styled, Typography, Grid } from "@mui/material";


export const MainHeading = styled(Typography)({
	color: "red"
})

export const Header = styled(Box)({
    width: '100%',
    height: '10vh',
    // backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '2px solid black',
})

export const HeaderItems = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
})

export const HeaderLinks = styled(Grid)({
})

export const HeaderLink = styled(Grid)({
})

export const HeaderLogo = styled(Grid)({
})

export const LogoImage = styled(Box)({
    height: 50,
    display: 'flex',
    marginLeft: 10,
    padding: 10,
})

export const LoginSection = styled(Grid)({
    display: 'flex',
    justifyContent: 'flex-end'
})

export const Login = styled(Box)({
    padding: 10,
    marginRight: 10,
})
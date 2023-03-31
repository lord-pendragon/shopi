import { Box, styled, Typography, Grid } from "@mui/material";


export const MainHeading = styled(Typography)({
	color: "red"
})

export const Footer = styled(Box)({
    width: '100%',
    height: '20vh',
    // backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    border: '2px solid black',
})

export const FooterItems = styled(Grid)({
})

export const FooterLink = styled(Grid)({
})

export const FooterLinks = styled(Grid)({
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: 20
})

export const FooterSupport = styled(Grid)({
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    marginRight: 20
})

export const FooterLogo = styled(Grid)({
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

export const Copyright = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
})
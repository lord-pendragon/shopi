import * as Styled from "./HeaderStyles"
import Logo from "../../assets/Future_Gadget_Lab_logo.png"
import { Menu, MenuItem, useMediaQuery, Button } from "@mui/material"
import { useState } from "react"
import Login from "./Login"

function Header() {

    const isMobile = useMediaQuery('(max-width:600px)')
    const [isOpen, setIsOpen] = useState(false)

    return(
        <Styled.Header>
            <Styled.HeaderItems container direction="row">
                <Styled.HeaderLogo item xs={isMobile ? 8 : 5}>
                    <Styled.LogoImage><img src={Logo} alt="logo"/></Styled.LogoImage>
                </Styled.HeaderLogo>
                {isMobile ? 
                <>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    Menu
                </Button>
                <Menu open={isOpen}>
                    <MenuItem><Styled.MainHeading>Header</Styled.MainHeading></MenuItem>
                    <MenuItem><Styled.MainHeading>Another</Styled.MainHeading></MenuItem>
                    <MenuItem><Styled.MainHeading>Again</Styled.MainHeading></MenuItem>
                </Menu>
                </> 
                : 
                <Styled.HeaderLinks container direction="row" spacing={4} xs={5}>
                <Styled.HeaderLink item>
                    <Styled.MainHeading>Summer</Styled.MainHeading>
                </Styled.HeaderLink>
                <Styled.HeaderLink item>
                    <Styled.MainHeading>Winter</Styled.MainHeading>
                </Styled.HeaderLink>
                <Styled.HeaderLink item>
                    <Styled.MainHeading>Special</Styled.MainHeading>
                </Styled.HeaderLink>
                </Styled.HeaderLinks>}

                <Styled.LoginSection item xs={isMobile ? 4 : 2}>
                    <Styled.Login>
                        <Login/>
                    </Styled.Login>
                </Styled.LoginSection>
            </Styled.HeaderItems>
        </Styled.Header>
    )
}
export default Header
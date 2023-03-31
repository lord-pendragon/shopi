import * as Styled from "./FooterStyles"
import Logo from "../../assets/Future_Gadget_Lab_logo.png"
import { Menu, MenuItem, useMediaQuery, Button } from "@mui/material"
import { useState } from "react"

function Footer() {

    const isMobile = useMediaQuery('(max-width:600px)')
    const [isOpen, setIsOpen] = useState(false)

    return(
        <Styled.Footer>
            <Styled.FooterItems container direction="row">
                <Styled.FooterLinks container xs={3} direction="column" spacing={1}>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Product</Styled.MainHeading>
                    </Styled.FooterLink>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Sentence 1</Styled.MainHeading>
                    </Styled.FooterLink>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Sentence 2</Styled.MainHeading>
                    </Styled.FooterLink>
                </Styled.FooterLinks>
                <Styled.FooterLinks container xs={5} direction="column" spacing={1}>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Terms</Styled.MainHeading>
                    </Styled.FooterLink>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Privacy Policy</Styled.MainHeading>
                    </Styled.FooterLink>
                </Styled.FooterLinks>
                <Styled.FooterSupport container xs={3} direction="column" spacing={2}>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Support</Styled.MainHeading>
                    </Styled.FooterLink>
                    <Styled.FooterLink item>
                        <Styled.MainHeading>Address</Styled.MainHeading>
                    </Styled.FooterLink>
                </Styled.FooterSupport>
            </Styled.FooterItems>
            <Styled.Copyright>A very nice Copyright goes here down in the centre</Styled.Copyright>
        </Styled.Footer>
    )
}
export default Footer
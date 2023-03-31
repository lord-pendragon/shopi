import * as Styled from "./LoginStyles"
import { SetStateAction, useState } from "react"
import { Box } from "@mui/system";

function Login() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        setLoggedIn(false)
        handleClose()
    }

    const handleLogIn = () => {
        setLoggedIn(true)
    }

    return(
        <Styled.Login>
            <Styled.LoginItems container direction="row" spacing={2}>
                <Styled.LoginItem item>
                    <Box mt={loggedIn ? 0 : 0.5}>
                        <Styled.CartIcon onClick={() => alert('Going to checkout!')}/>
                    </Box>
                </Styled.LoginItem>
                <Styled.LoginItem item>
                    {loggedIn ?
                        <div>
                            <Styled.UserIcon onClick={(event: any) => setAnchorEl(event.currentTarget)}/>
                            <Styled.UserMenu
                                anchorEl={anchorEl}
                                keepMounted
                                open={!!anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                                }}
                                transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                                }}
                            >
                                <Styled.UserMenuOption onClick={() => alert('USer settings')}>
                                    User Settings
                                </Styled.UserMenuOption>
                                <Styled.UserMenuOption onClick={() => handleLogOut()}>
                                    Log Out
                                </Styled.UserMenuOption>
                            </Styled.UserMenu>
                        </div>
                        :
                        <Styled.SignInButton onClick={() => handleLogIn()}>
                            <Styled.SignInText>
                                Sign In
                            </Styled.SignInText>
                        </Styled.SignInButton> 
                    }
                </Styled.LoginItem>
            </Styled.LoginItems>
        </Styled.Login>
    )
}
export default Login
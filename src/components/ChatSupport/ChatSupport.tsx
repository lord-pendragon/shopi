import * as Styled from "./ChatSupportStyles"
import { useState } from "react"

function ChatSupport() {

    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [conversation, setConversation] = useState("Awesome")

    return(
        <>
        {isOpen ? 
            <Styled.ChatBox>
                <Styled.ChatBoxHeader>
                    <Styled.CloseIcon onClick={() => setIsOpen(!isOpen)}/>
                </Styled.ChatBoxHeader>
                <Styled.ChatBoxArea>
                    {conversation}
                </Styled.ChatBoxArea>
                <Styled.ChatBoxInput 
                    endAdornment={<Styled.SubmitIcon onClick={() => {setConversation(input)}}/>} 
                    placeholder="Speak to our chat support" value={input} 
                    fullWidth 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setInput(event.target.value);}}
                />
            </Styled.ChatBox>        
        :
        <Styled.ChatSupport onClick={() => setIsOpen(!isOpen)}>
            <Styled.ChatIcon/>
        </Styled.ChatSupport>
        }
        </>
    )
}
export default ChatSupport
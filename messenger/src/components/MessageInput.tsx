import { useState } from "react"
import sendIcon from "../media/send.png"

type MessageInputProps = {
  sendFunction: any
}

export default function MessageInput(props: MessageInputProps) {
  let [inputText, setInputText] = useState("");

  const f = () => {
    props.sendFunction(inputText);
    setInputText("");
  }

  return (
    <div className="MessageInput">
      <input className="MessageInput-input" type="text" placeholder="Type here..." value={inputText} onChange={(e) => {setInputText(e.target.value)}} onKeyDown={(e) => {e.key === "Enter" && f()}} />
      <button className="MessageInput-send" onClick={f}>
        <img src={sendIcon} alt="send" />
      </button>
    </div>
  );
}

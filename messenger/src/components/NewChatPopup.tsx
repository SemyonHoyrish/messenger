import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type NewChatPopupProps = {
  setIsPopupOpen: any;
  addChatFunction: any;
}

export default function NewChatPopup(props: NewChatPopupProps) {
  let [userCode, setUserCode] = useState("GLHF");
  let [someonesCode, setSomeonesCode] = useState("");

  const resetCode = () => {

  };

  return (
    <div className="NewChatPopup">
      <div className="NewChatPopup-wrapper">
        <div className="NewChatPopupItem NewChatPopup-yourCode">
          <p className="NewChatPopup-yourCode-text">
            Your code: <span className="NewChatPopup-yourCode-code">{userCode}</span>
          </p>
          <p className="NewChatPopup-yourCode-reset" onClick={resetCode}>reset</p>
        </div>
        <div className="NewChatPopupItem NewChatPopup-inputCode">
          <TextInput setValue={setSomeonesCode} placeholder="input someone's code" />
        </div>
        <div className="NewChatPopupItem NewChatPopup-addButton NewChatPopupButton">
          <Button onClick={() => {props.addChatFunction(someonesCode); props.setIsPopupOpen(false);}}>add</Button>
        </div>
        <div className="NewChatPopupItem NewChatPopup-cancelButton NewChatPopupButton">
          <Button onClick={() => {props.setIsPopupOpen(false);}}>cancel</Button>
        </div>
      </div>
    </div>
  );
}
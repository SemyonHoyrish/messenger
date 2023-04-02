import { useState } from "react";

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
          <input type="text" placeholder="input someone's code" onChange={(e) => {setSomeonesCode(e.target.value);}} />
        </div>
        <div className="NewChatPopupItem NewChatPopup-addButton NewChatPopupButton">
          <button onClick={() => {props.addChatFunction(someonesCode); props.setIsPopupOpen(false);}}>add</button>
        </div>
        <div className="NewChatPopupItem NewChatPopup-cancelButton NewChatPopupButton">
          <button onClick={() => {props.setIsPopupOpen(false);}}>cancel</button>
        </div>
      </div>
    </div>
  );
}
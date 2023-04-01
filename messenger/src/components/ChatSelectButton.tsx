import { Page } from "../App";

type ChatSelectButtonProps = {
    avatarURL: string;
    nickname: string;
    setPage: any;
    setChatID: any;
}

export default function ChatSelectButton(props: ChatSelectButtonProps) {
    return (
        <div onClick={() => {
                props.setChatID(0);
                props.setPage(Page.Chat);
            }} className="ChatSelectButton">
            <img className="ChatSelectButton-avatar" src={props.avatarURL} alt="avatar" />
            <p className="ChatSelectButton-nickname">{props.nickname}</p>
        </div>
    );
}

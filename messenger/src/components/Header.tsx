import { Page } from "../App";
import settingsIcon from "../media/settings.png"

type HeaderProps = {
  title: string;
  setPage: any;
  goBack?: boolean
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="topRef"></div>
      <header className={"header" + (props.goBack ? " cursorPointer" : "")} onClick={() => {if (props.goBack) props.setPage(Page.ChatsList)}}>
        <p className="header-title">{props.title}</p>
        <img className="header-settings" src={settingsIcon} alt="settings" onClick={() => {props.setPage(Page.Settings)}} />
      </header>
    </>
  );
}

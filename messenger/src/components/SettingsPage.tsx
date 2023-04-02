import { useState } from "react";
import Header from "./Header";
import TextInput from "./TextInput";
import Button from "./Button";

type SettingsPageProps = {
  setPage: any;
}

export default function SettingsPage(props: SettingsPageProps) {
  let [serverBaseURL, setServerBaseURL] = useState("");

  return (
    <>
      <Header title="Settings" setPage={props.setPage} goBack />
      <div className="SettingsPage">
        <div className="wrapper">
          <TextInput value={serverBaseURL} setValue={setServerBaseURL} placeholder="server base url" />
          <Button onClick={() => {}}>login</Button>
        </div>
      </div>
    </>
  );
}

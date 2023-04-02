import { useState } from "react";
import Header from "./Header";
import TextInput from "./TextInput";
import Button from "./Button";

type AuthPageProps = {
  setPage: any;
}

export default function AuthPage(props: AuthPageProps) {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <Header title="Login" setPage={props.setPage} />
      <div className="AuthPage">
        <div className="wrapper">
          <TextInput setValue={setLogin} placeholder="login" />
          <TextInput setValue={setPassword} placeholder="password" />
          <Button onClick={() => {}}>login</Button>
        </div>
      </div>
    </>
  );
}

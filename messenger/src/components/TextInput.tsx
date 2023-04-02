type TextInputProps = {
  setValue: any;
  placeholder?: string;
  value?: string
}

export default function TextInput(props: TextInputProps) {
  return (
    <input className="input" type="text" placeholder={props.placeholder} value={props.value} onChange={(e) => {props.setValue(e.target.value);}} />
  );
}

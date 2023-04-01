type HeaderProps = {
    title: string;
}

export default function Header(props: HeaderProps) {
    return (
        <header className="header">
            <p className="header-title">{props.title}</p>
        </header>
    );
}

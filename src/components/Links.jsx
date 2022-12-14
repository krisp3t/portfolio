const linkStyle = "hover:text-theme-light transition-all duration-150 decoration-theme-secondary";

export default function Links(props) {
    return (
        <ul {...props}>
            <li className="pl-4 flex space-x-8 text-theme-silk font-bold md:text-lg font-mono underline underline-offset-8 decoration-2">
                <a href="/#about" className={linkStyle}>About</a>
                <a href="/#projects" className={linkStyle}>Projects</a>
                <a href="/#contact" className={linkStyle}>Contact</a>
            </li>
        </ul>
    )
}
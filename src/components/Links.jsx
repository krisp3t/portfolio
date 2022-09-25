const linkStyle = "hover:text-theme-light transition-all duration-150";

export default function Links(props) {
    return (
        <ul {...props}>
            <li className="flex space-x-8 text-theme-silk font-bold text-lg font-mono underline underline-offset-8 decoration-theme-secondary decoration-2">
                <a href="/#about" className={linkStyle}>About</a>
                <a href="/#projects" className={linkStyle}>Projects</a>
                <a href="/#contact" className={linkStyle}>Contact</a>
            </li>
        </ul>
    )
}
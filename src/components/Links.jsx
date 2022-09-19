export default function Links(props) {
    return (
        <ul {...props}>
            <li className="flex space-x-8 text-theme-silk font-bold text-lg font-mono underline underline-offset-8 decoration-theme-secondary">
                <a href="/#about">About</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    )
}
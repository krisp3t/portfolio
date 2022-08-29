export default function Links(props) {
    return (
        <ul {...props}>
            <li className="flex space-x-8 text-theme-lighter font-bold text-lg font-mono underline underline-offset-4 decoration-theme-lighter/20">
                <a href="/#about">About</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    )
}
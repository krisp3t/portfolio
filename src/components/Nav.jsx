import Logo from '../icons/Logo';
import Links from "./Links";

export default function Nav(props) {
    return (
        <header
            className={`z-50 w-full h-24 m-auto sticky top-0 backdrop-blur-sm backdrop-brightness-[0.75] backdrop-opacity-[0] transition-navbar ease-out duration-100 ${props.blur ? `backdrop-opacity-100` : ``}`}>
            <nav className="z-50 h-full px-6 md:px-14 py-2 flex items-center justify-between flex-row">
                <a href="/#main" className="h-full" aria-label="home">
                    <Logo className="h-full py-0.5"/>
                </a>
                <Links/>
            </nav>
        </header>);
}
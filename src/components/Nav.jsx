import Logo from '../icons/Logo';
import Links from "./Links";

/* TODO: blur only when scrolled */
export default function Nav() {
    return (
        <header className="w-full h-24 m-auto sticky top-0 backdrop-blur-lg backdrop-brightness-75 z-50 shadow-xl">
            <nav className="h-full px-14 py-2 flex items-center justify-between flex-row">
                <a href="/#hero" className="h-full" aria-label="home">
                    <Logo className="h-full py-0.5"/>
                </a>
                <Links/>
            </nav>
        </header>);
}
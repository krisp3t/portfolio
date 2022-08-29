import Logo from '../icons/Logo';

export default function Nav() {
    return (
        <header className="w-screen h-20">
            <nav className="h-full px-10 py-2 flex items-center justify-between">
                <a href="/" className="h-full">
                    <Logo className="h-full"/>
                </a>
            </nav>
        </header>);
}
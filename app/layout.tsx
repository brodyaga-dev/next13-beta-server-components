import Link from 'next/link';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/server">Server</Link>
                            </li>
                            <li>
                                <Link href="/client">Client</Link>
                            </li>
                            <li>
                                <Link href="/mixmatch">Mix Match</Link>
                            </li>
                            <li>
                                <Link href="/degenerate">Degenerate</Link>
                            </li>
                        </ul>
                    </nav>
                    {children}
                </div>
            </body>
        </html>
    );
}

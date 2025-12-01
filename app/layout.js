import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/heroes">Heroes</Link></li>
                    <li><Link href="/items">Items</Link></li>
                    <li><Link href="/emblems">Emblems</Link></li>
                    <li><Link href="/draft-analyzer">Draft Analyzer</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
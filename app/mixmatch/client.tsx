'use client';

import { useEffect } from 'react';

export default function Client({
    message,
    children,
}: {
    message: string;
    children: React.ReactNode;
}) {
    console.log('Client component rendering');

    useEffect(() => {
        console.log('Client child rendered');
    });

    return (
        <div>
            <h2>Client Child</h2>
            <p>Message from parent: {message}</p>
            <div className="box-red">{children}</div>
        </div>
    );
}

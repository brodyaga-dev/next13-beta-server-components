'use client';

import NestedServer from './nested-server';

export default function Client({ message }: { message: string }) {
    console.log('Client component rendering');

    return (
        <div>
            <h2>Client Child</h2>
            <p>Message from parent: {message}</p>
            <div className="box-blue">
                <NestedServer />
            </div>
        </div>
    );
}

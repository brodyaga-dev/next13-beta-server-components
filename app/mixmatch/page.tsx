import Client from './client';
import NestedServer from './nested-server';

export default function MixMatchPage() {
    console.log('MixMatchPage rendering');
    return (
        <div>
            <h1>MixMatch Server Page</h1>
            <div className="box-blue">
                <Client message="A message from server">
                    <NestedServer />
                </Client>
            </div>
        </div>
    );
}

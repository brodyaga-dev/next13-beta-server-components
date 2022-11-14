import Client from './client';

export default function MixMatchPage() {
    console.log('MixMatchPage rendering');
    return (
        <div>
            <h1>MixMatch Server Page</h1>
            <div className="box-blue">
                <Client message="A message from server" />
            </div>
        </div>
    );
}

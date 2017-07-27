import * as React from 'react';
import Navigation from './components/Navigation';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>React with TypeScript</h1>
                <Navigation />
            </div>
        );
    }
}

export default App;

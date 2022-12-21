import About from './About';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <h1>This is the main page</h1>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
import About from './About';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
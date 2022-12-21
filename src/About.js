import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about page</h1>
            <p><Link to='/' style={{color: "grey"}}>Back to home page</Link></p>
        </div>
    )
}

export default About
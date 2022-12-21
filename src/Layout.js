import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <h1>This is the main page</h1>
        <p><Link to='/about' style={{color: "grey"}}>Go to about page</Link></p>
    </div>
  )
}

export default Layout
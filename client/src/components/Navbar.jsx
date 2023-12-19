import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Register</Link>
      <Link to='/account'>Account</Link>
      <Link to='/people'>People</Link>
    </nav>
  )
}

export default Navbar
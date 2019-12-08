import { Link } from 'react-router'
import MdAccessAlarms from 'react-icons/lib/md/access-alarms'
import MdAcUnit from 'react-icons/lib/md/ac-unit'
import MdAdb from 'react-icons/lib/md/adb'

export const Menu = () => 
<nav className="menu">
    <Link to="/" activeClassName="selected">
        <MdAccessAlarms />
    </Link>
    <Link to="/add-day" activeClassName="selected">
        <MdAcUnit />
    </Link>
    <Link to="/list-days" activeClassName="selected">
        <MdAdb />
    </Link>
</nav>
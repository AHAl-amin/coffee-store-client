import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Users">Users</NavLink>
            <NavLink to="/signup">sign Up</NavLink>
           
        </div>
    );
};

export default Header;
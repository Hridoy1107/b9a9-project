import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li ><NavLink to="/" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Home</span></NavLink></li>
        <li><NavLink to="/update" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[168px] h-[48px]"><span className=" text-lg ">Update Profile</span></NavLink></li>
        <li><NavLink to="/user" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">User Profile</span></NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 w-[1210px]">
                <div className="navbar-start">
                    <h1 className="animate__animated animate__zoomInLeft animate__fast animate__repeat-1 text-3xl h-[48px] ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-amber-400 to-red-400 animate-text">Apple Real Estate</h1>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn w-[120px] h-[48px] bg-[#23BE0A] hover:bg-[#23BE0A] text-[#FFFFFF]">Log In</NavLink>
                    <NavLink to="/register" className="btn w-[120px] ml-4 h-[48px] bg-[#59C6D2] hover:bg-[#59C6D2] text-[#FFFFFF]">Register</NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;
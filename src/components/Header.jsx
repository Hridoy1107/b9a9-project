import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li ><NavLink to="/" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Home</span></NavLink></li>
        <li><NavLink to="/lbs" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[148px] h-[48px]"><span className=" text-lg ">Listed Books</span></NavLink></li>
        <li><NavLink to="/ptr" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[160px] h-[48px]"><span className=" text-lg ">Pages to Read</span></NavLink></li>
        <li ><NavLink to="/writer" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Writer</span></NavLink></li>
        <li ><NavLink to="/query" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "green" : "grey",
            };
        }} className=" btn w-[92px] h-[48px]"><span className=" text-lg ">Query</span></NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100 w-[1210px]">
                <div className="navbar-start">
                    <h1 className="text-3xl h-[48px] ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-amber-400 to-red-400
            animate-text">Real Estate</h1>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal mr-10 px-1 gap-x-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn w-[120px] h-[48px] bg-[#23BE0A] text-[#FFFFFF]">Log In</a>
                    <a className="btn w-[120px] ml-4 h-[48px] bg-[#59C6D2] text-[#FFFFFF]">Register</a>
                </div>
            </div>
        </>
    );
};

export default Header;
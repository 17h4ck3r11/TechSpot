const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Tech<span style={{color:"blue"}}>Spot</span></h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;

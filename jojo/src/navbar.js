
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="aligne">
            <img src="jojo.jpg"></img>
            <h1>JoJo's juice shop</h1>
            <div className="links">
                
                <a href="/" style={{color:"#04d9ff"}}>Home</a>
                <a href='/create' style={{color:"#04d9ff"}}>Menu</a>
                <a style={{color:"#04d9ff"}}>About us </a>
                <a  style={{
                    backgroundColor:"#04d9ff",
                    color:"black",
                    borderRadius:"8px"
                }}>Order Now</a>
            </div>
            </div>
        </nav>
    );
}
    
export default Navbar;
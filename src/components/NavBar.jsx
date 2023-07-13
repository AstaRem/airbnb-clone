import airBnb from '../assets/air-bnb.png'

function NavBar() {

    return (
      <div className="nav-container">
        <nav>
          <img className="logo-img" src={airBnb} alt=""/>
        </nav>

      </div>
    )
  }
  
export default NavBar;
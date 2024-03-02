import "./navigationmenu.css";
import SearchBar from "./SearchBar";
import logo from "./logos/NJ_transparent.png";
import User from "./User";

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <img className="nj-logo" src={logo} alt="logo" />
      <SearchBar />
      <User/>
    </div>
  );
}

export default NavigationMenu;

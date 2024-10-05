import { LOGO_URL } from "../utils/constants";
const TopNav = () => {
  return (
    <div className="topnav">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <ul>
        <li>Admin</li>
        <li>Homes</li>
        <li>Enterprises</li>
      </ul>
    </div>
  );
};

export default TopNav;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="font-bold flex justify-between border-b-2 p-2">
      <Link to={"/"}>home</Link>
      <Link to={"/chat"}>chaaaat</Link>
    </header>
  );
};

export default Header;

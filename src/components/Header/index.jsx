import Logo from "../../assets/logo.png";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <figure>
        <img src={Logo} alt="Logo Nu Kenzie" />
      </figure>
    </header>
  );
};

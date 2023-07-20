// import { NavLink } from "react-router-dom";
import phoenix from "../img/phoenix.png";
const Navigation = () => {
  return (
    <nav className="bg-amber-500">
      <ul className="flex flex-row justify-evenly items-center m-2 p-4 ">
        <li>
          <a href="/" className="">
            Home
          </a>
        </li>
        <li>
          {/*  <NavLink to={`/recipes/${recipesID}`} className="">Recipes</NavLink>  */}
          <a href="#recipes" className="">
            Recipes
          </a>
        </li>
        <li>
          <a href="#" className="text-3xl">
            <img src={phoenix} className="h-[80px]" />
          </a>
        </li>
        <li>
          <a href="#about" className="">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

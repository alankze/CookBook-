// import { NavLink } from "react-router-dom";
import phoenix from "../img/phoenix.png";
const Navigation = () => {
  return (
    <nav className="bg-nav">
      <ul className="flex flex-row justify-evenly items-center m-2 p-4 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          {/*  <NavLink to={`/recipes/${recipesID}`} className="">Recipes</NavLink>  */}
          <a href="#recipes">Recipes</a>
        </li>
        <li>
          <a href="#" className="text-3xl">
            <img src={phoenix} className="h-[80px] " />
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

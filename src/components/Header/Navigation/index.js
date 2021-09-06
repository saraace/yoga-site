import Link from "next/link";
import { NavLink } from "theme-ui";
import { NavMenu, NavItem } from "./styles";

const Navigation = () => {
  return (
    <NavMenu>
      <NavItem>
        <Link href="/explore">
          <NavLink>Explore</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/classes">
          <NavLink>Classes</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/locations">
          <NavLink>Locations</NavLink>
        </Link>
      </NavItem>
    </NavMenu>
  );
};

export default Navigation;

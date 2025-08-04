import Container from "../container/Container";
import { Link } from "react-router";
import styled from "./header.module.css";
import shoppingItem from "../../assets/icon-shopping.png";
import { userShopingCartContext } from "../../context/shopingCartContext";

function Header() {
  const { allQty } = userShopingCartContext();

  return (
    <div className={styled.header}>
      <div className="bg-neutral-700 opacity-80 py-5 mb-10 rounded-b-lg">
        <Container>
          <div className="flex items-center justify-between ">
            <ul className="text-white flex gap-8 text-xl font-bold">
              <li>
                <Link to="/ReactTest2">home</Link>
              </li>
              <li>
                <Link to="/ReactTest2/shop"> shop</Link>
              </li>
              <li>
                <Link to="/ReactTest2/store"> store</Link>
              </li>
            </ul>
            {allQty == 0 ? (
              <Link to="/ReactTest2/shopping-cart">
                <img src={shoppingItem} alt="" />
              </Link>
            ) : (
              <div className="flex relative">
                <span className="text-xs flex items-center justify-center text-white w-5 h-5 rounded-full bg-red-600 absolute -top-2 left-5">
                  {allQty}
                </span>
                <Link to="/ReactTest2/shopping-cart">
                  <img src={shoppingItem} alt="" />
                </Link>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;

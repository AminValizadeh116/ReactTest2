import { useEffect, useState } from "react";
import Container from "../container/Container";
import { getProduct } from "../../services/api";
import { userShopingCartContext } from "../../context/shopingCartContext";
import type { IProducts } from "../../types/services";
import Button from "../button/Button";

interface IShopItem {
  id: number;
  Qty: number;
}

function ShopItem({ id, Qty }: IShopItem) {
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProduct,
  } = userShopingCartContext();
  const [product, setProduct] = useState<IProducts>();
  useEffect(() => {
    getProduct(id as number).then((result) => setProduct(result));
  }, []);

  return (
    <>
      <Container>
        <div className="flex pb-5">
          <div className="mr-20">
            <img className="w-40" src={product?.image} alt="" />
          </div>
          <div className="max-sm:text-xs max-md:text-sm">
            <h2>{product?.title}</h2>
            <div className="flex items-center gap-3 mt-10 mb-3 max-sm:mt-4 max-sm:mb-1">
              <Button
                onClick={() => handleIncreaseProductQty(id)}
                variant="warning"
                className="max-sm:w-10 max-sm:h-6 sm:w-13 sm:h-8"
              >
                +
              </Button>
              <span>{Qty}</span>
              <Button
                onClick={() => handleDecreaseProductQty(id)}
                variant="warning"
                className="max-sm:w-10 max-sm:h-6 sm:w-13 sm:h-8"
              >
                -
              </Button>
            </div>
            <div>
              <Button
                onClick={() => handleRemoveProduct(id)}
                variant="danger"
                className="max-sm:w-27 max-sm:h-6 sm:w-35 sm:h-8"
              >
                remove
              </Button>
            </div>
          </div>
        </div>
        <hr className="text-neutral-300" />
      </Container>
    </>
  );
}

export default ShopItem;

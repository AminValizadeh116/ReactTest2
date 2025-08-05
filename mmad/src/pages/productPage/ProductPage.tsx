import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import { getProduct } from "../../services/api";
import { userShopingCartContext } from "../../context/shopingCartContext";
import Loading from "../../components/loading/Loading";
import type { IProducts } from "../../types/services";
import Button from "../../components/button/Button";

function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [productDetails, setProductDetails] = useState<IProducts>();
  const params = useParams<{ id: string }>();
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    getProductQty,
    contextItems,
  } = userShopingCartContext();
  handleDecreaseProductQty;

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProductDetails(result), setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <img
              src={productDetails?.image}
              alt="product image"
              className="rounded-l-2xl h-100 max-sm:h-50 max-md:h-70"
            />
          </div>
          <div className="col-span-2 shadow rounded-r-2xl p-8 max-sm:p-2  max-md:p-5">
            <div className={`${!expanded? 'max-sm:max-h-25 overflow-scroll': ''} `}>
              <h2 className="max-md:text-sm text-xl font-bold mb-3">
                {productDetails?.title}
              </h2>
              <p className="max-md:text-xs">{productDetails?.description}</p>
            </div>
            {!expanded ? (
              <button
                onClick={() => setExpanded(true)}
                className="text-red-800 cursor-pointer min-sm:hidden"
              >
                more
              </button>
            ) : (
              <button
                onClick={() => setExpanded(false)}
                className="text-red-800 cursor-pointer"
              >
                less
              </button>
            )}

            <div className="flex justify-between items-center pt-15  max-md:pt-8">
              <span className="text-neutral-500 max-md:text-xs">
                {productDetails?.price} $
              </span>
              {contextItems.find(
                (item) => item.id == parseInt(params.id as string)
              ) ? (
                <div className="flex items-center gap-1 max-md:text-xs">
                  <Button
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    variant="danger"
                    size="2"
                  >
                    -
                  </Button>

                  <span>{getProductQty(parseInt(params.id as string))}</span>

                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    variant="primary"
                    size="2"
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  className="max-md:text-xs"
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  size="2"
                >
                  buy now
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default ProductPage;

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
  const [productDetails, setProductDetails] = useState<IProducts>();
  const params = useParams<{ id: string }>();
  const {handleDecreaseProductQty, handleIncreaseProductQty, getProductQty, contextItems } = userShopingCartContext();
  handleDecreaseProductQty

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProductDetails(result), setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      {!isLoading?
      <div className="grid grid-cols-12 gap-1 relative">
      <div className="col-span-4">
        <img
          src={productDetails?.image}
          alt=""
          className="rounded-l-2xl h-100"
        />
      </div>
      <div className="col-span-8 shadow rounded-r-2xl p-8">
        <h2 className="text-xl font-bold mb-3 ">{productDetails?.title}</h2>
        <p>{productDetails?.description}</p>
        <div className="flex absolute bottom-6 w-150 justify-between items-center">
          <span className="text-neutral-500">{productDetails?.price} $</span>

          {contextItems.find(
            (item) => item.id == parseInt(params.id as string)
          ) ? (
            <div className="flex items-center gap-1">
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
      :
          <Loading />
      }
      
    </Container>
  );
}

export default ProductPage;

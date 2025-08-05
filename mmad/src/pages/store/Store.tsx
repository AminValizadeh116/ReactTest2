import Container from "../../components/container/Container";
import { getProducts } from "../../services/api";
import Loading from "../../components/loading/Loading";
import type { IProducts } from "../../types/services";
import { useEffect, useState } from "react";
import SingleShoppingCart from "../../components/singleShoppingCart/SingleShoppingCart";

function Store() {
  const [productsList, setProductList] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((result) => {
      setProductList(result);
      setIsLoading(false);
    })
  }, []);

  return (
    <Container>
      {!isLoading ? (
        <div className="grid grid-cols-4 gap-5 ">
          {productsList.map((item) => (
            <SingleShoppingCart {...item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Store;

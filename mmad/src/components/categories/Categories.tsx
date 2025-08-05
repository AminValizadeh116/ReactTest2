import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { IProducts } from "../../types/services";
import Button from "../button/Button";
import SingleShoppingCart from "../singleShoppingCart/SingleShoppingCart";
import Loading from "../loading/Loading";

function Categories() {
  const allCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const [data, setData] = useState<IProducts[]>([]);
  const [status, setStatus] = useState("women's clothing");
  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  const categirizedData = data.filter((item) => item.category == status);
  console.log(categirizedData);

  return (
    <div className="mt-15">
      <ul className="grid grid-cols-4 gap-5">
        {allCategories.map((item) => (
          <Button
            variant="dark"
            onClick={() => {
              setStatus(item);
            }}
          >
            <li key={item} className="py-3">
              {item}
            </li>
          </Button>
        ))}
      </ul>
      {data.length !== 0 ? (
        <div className="grid grid-cols-4 gap-5 pt-15">
          {categirizedData.map((item) => (
            <SingleShoppingCart key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Categories;

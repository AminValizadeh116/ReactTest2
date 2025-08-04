import React, { createContext, useContext, useState } from "react";

type TshopingCartProvider = { children: React.ReactNode };

interface IShopingCartCotext {
  contextItems: IContextItem[];
  allQty: number;
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
  getProductQty: (id: number) => number;
}

interface IContextItem {
  id: number;
  Qty: number;
}

const ShopingCartCotext = createContext({} as IShopingCartCotext);

export const userShopingCartContext = () => {
  return useContext(ShopingCartCotext);
};

export function ShopingCartProvider({ children }: TshopingCartProvider) {
  const [contextItems, setContextItem] = useState<IContextItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setContextItem((preItems) => {
      let selectrdItem = preItems.find((item) => item.id === id);

      if (selectrdItem == null) {
        return [...preItems, { id: id, Qty: 1 }];
      } else {
        return preItems.map((item) => {
          if (item.id === id) {
            return { ...item, Qty: item.Qty + 1 };
          } else {
            return { ...item };
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setContextItem((preItems) => {
      let selectedItem = preItems.find((item) => item.id == id);

      if (selectedItem?.Qty == 1) {
        return preItems.filter((item) => item !== selectedItem);
      } else {
        return preItems.map((item) => {
          if (item.id == id) {
            return { ...item, Qty: item.Qty - 1 };
          } else {
            return { ...item };
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return contextItems.find((item) => item.id == id)?.Qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setContextItem((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const allQty = contextItems.reduce(
    (totalQty, item) => totalQty + item.Qty,
    0
  );

  return (
    <ShopingCartCotext.Provider
      value={{
        contextItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        allQty,
      }}
    >
      {children}
    </ShopingCartCotext.Provider>
  );
}

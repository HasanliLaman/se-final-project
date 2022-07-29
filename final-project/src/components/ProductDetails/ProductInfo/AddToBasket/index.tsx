import React, { useState } from "react";
import StyleAddToBasket from "./style";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store";
import { addToBasket, setLocalStorage } from "../../../../slices/cartSlice";
import { toast } from "react-toastify";

const AddToBasket = () => {
  const data = useSelector((state: RootState) => state.product);
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  const addProduct = () => {
    toast.success("Product is added to basket!");
    dispatch(
      addToBasket({
        name: data.product.name,
        id: data.product.id,
        price: data.product.price.raw,
        img: data.product.image.url,
        quantity: count,
      })
    );
    dispatch(setLocalStorage());
  };

  return (
    <StyleAddToBasket>
      <div className="count">
        <button
          onClick={() => {
            setCount((prev) => (prev === 1 ? prev : prev - 1));
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={addProduct}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.382 11H6.764L5.127 5H17.382L14.382 11ZM19.083 3.948C18.716 3.354 18.08 3 17.382 3H4.582L3.965 0.737C3.846 0.302 3.451 0 3 0H1C0.447 0 0 0.448 0 1C0 1.552 0.447 2 1 2H2.236L5.035 12.263C5.154 12.698 5.549 13 6 13H15C15.379 13 15.725 12.786 15.895 12.447L19.171 5.894C19.484 5.269 19.45 4.542 19.083 3.948ZM5.5002 15C4.6722 15 4.0002 15.671 4.0002 16.5C4.0002 17.329 4.6722 18 5.5002 18C6.3282 18 7.0002 17.329 7.0002 16.5C7.0002 15.671 6.3282 15 5.5002 15ZM14.0002 16.5C14.0002 15.671 14.6722 15 15.5002 15C16.3282 15 17.0002 15.671 17.0002 16.5C17.0002 17.329 16.3282 18 15.5002 18C14.6722 18 14.0002 17.329 14.0002 16.5Z"
            fill="#fff"
          />
        </svg>
        Səbətə at
      </button>
    </StyleAddToBasket>
  );
};

export default AddToBasket;

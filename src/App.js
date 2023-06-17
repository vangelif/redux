import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar />;
      <CartContainer />;
    </main>
  );
}
export default App;


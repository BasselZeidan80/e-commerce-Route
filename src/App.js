import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import Brand from "./Components/Brands/Brand";
import Categories from "./Components/Categories/Categories";
import CounterContextProvider from "./Context/CounterContext";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Products /> },
        { path: "Cart", element: <Cart /> },
        { path: "Login", element: <Login /> },
        { path: "SignUp", element: <SignUp /> },
        { path: "Brand", element: <Brand /> },
        { path: "Categories", element: <Categories /> },
        { path: "Products", element: <Products /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="App">


<CounterContextProvider >

<RouterProvider router={myRouter} />


</CounterContextProvider>

    </div>
  );
}

export default App;

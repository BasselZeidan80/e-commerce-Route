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
import AuthContextPProvider from "./Context/AuthContext";
import Guard from "./Components/Guard/Guard";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "react-query";



function App() {
  const myQuery = new QueryClient()
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Guard><Products /> </Guard>  },
        { path: "Cart", element: <Guard><Cart /> </Guard>   },
        { path: "Login", element: <Login /> },
        { path: "SignUp", element: <SignUp /> },
        { path: "Brand", element: <Brand /> },
        { path: "Categories", element: <Guard><Categories /> </Guard>   },
        { path: "Products", element:<Guard><Products /> </Guard>  },
        { path: "ProductDetails/:id", element:<Guard><ProductDetails /> </Guard>  },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="App">


<QueryClientProvider client={myQuery}>

<AuthContextPProvider >
<RouterProvider router={myRouter} />
</AuthContextPProvider>
</QueryClientProvider>

    </div>
  );
}

export default App;

import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import OrdersTable from "./components/OrdersManagement/OrdersTable";
//import 'bootstrap/dist/css/bootstrap.min.css';
import CustomersTable from "./components/customersTable";

//import OrdersTables from "./components/OrdersManagement/OrdersTables";

import ProductsTable from "./components/ProductsManagement/ProductsTable";



import OrdersCalendarView from "./components/OrdersCalendarView";

//import OrdersCalendar from "./components/OrdersCalendar"; 

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="/products" element={<ProductsTable />} />
            {/* <Route path="/orders" element={<OrdersManagement />} /> */}
            <Route path="/orders" element={<OrdersTable />} /> {/* Set the path for Orders Management */}
            <Route path="/orders-calendar" element={<OrdersCalendarView />} />
            <Route path="/customers" element={<CustomersTable />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;

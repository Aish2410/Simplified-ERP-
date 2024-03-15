import { Link } from "react-router-dom";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <Link to="/products">
        <AreaCard
          colors={["#e4e8ef", "#475be8"]}
          percentFillValue={80} // Placeholder data
          cardInfo={{
            title: "Total Products", // Updated title
            value: "500", // Placeholder value for total products
            text: "Total products in stock", // Placeholder text
          }}
        />
      </Link>

      <Link to="/orders">
        <AreaCard
          colors={["#e4e8ef", "#4ce13f"]}
          percentFillValue={50} // Placeholder data
          cardInfo={{
            title: "Total Orders", // Updated title
            value: "200", // Placeholder value for total orders
            text: "Total orders received", // Placeholder text
          }}
        />
      </Link>
    </section>
  );
};

export default AreaCards;

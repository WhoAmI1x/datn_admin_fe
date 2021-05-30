import { Container } from "./styled";
import { Bar } from "@ant-design/charts";

function PieChartProduct({ ecommerce, discountCodesByCategories }) {
  var config = {
    data: discountCodesByCategories,
    xField: "discountCodeQuantity",
    yField: "categoryName",
    legend: false,
  };

  return (
    <Container>
      <Bar {...config} />
    </Container>
  );
}

export default PieChartProduct;

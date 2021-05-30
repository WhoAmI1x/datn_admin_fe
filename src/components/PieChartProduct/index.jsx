import { Container } from "./styled";
import { Pie } from "@ant-design/charts";

function PieChartProduct({ ecommerce, productsByCategories }) {
  var config = {
    appendPadding: 10,
    data: productsByCategories,
    angleField: "productQuantity",
    colorField: "categoryName",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return ecommerce;
        },
      },
    },
    tooltip: {
      showTitle: true,
    },
  };

  return (
    <Container>
      <Pie {...config} />
    </Container>
  );
}

export default PieChartProduct;

import { Col, Row } from "antd";
import React, { useEffect } from "react";
import PieChartProduct from "../../components/PieChartProduct";
import ColumnChartDiscountCode from "../../components/ColumnChartDiscountCode";
import { actGetStatistic } from "../../redux/actions/statistic";
import {
  DollarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Container,
  StatisticItem,
  StatisticIcon,
  StatisticText,
  RowCustom,
} from "./styled";
import { connect } from "react-redux";

function Dashboard({ statistic, actGetStatistic }) {
  useEffect(() => {
    actGetStatistic();
  }, []);

  return (
    <Container>
      <RowCustom gutter={[16, 0]}>
        {statistic.statisticTotals?.map(({ label, quantity }, index) => (
          <Col span={8} key={index}>
            <StatisticItem>
              <StatisticText>
                <p>{quantity}</p>
                <p>{label}</p>
              </StatisticText>
              <StatisticIcon>
                <UserOutlined />
              </StatisticIcon>
            </StatisticItem>
          </Col>
        ))}
      </RowCustom>

      <RowCustom gutter={[16, 0]}>
        {statistic.products?.map((p, index) => (
          <Col span={12} key={index}>
            <PieChartProduct {...p}></PieChartProduct>
          </Col>
        ))}
      </RowCustom>

      <Row gutter={[16, 0]}>
        {statistic.discountCodes?.map((dc, index) => (
          <Col span={12} key={index}>
            <ColumnChartDiscountCode {...dc}></ColumnChartDiscountCode>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  statistic: state.statistic,
});

const mapDispatchToProps = {
  actGetStatistic,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

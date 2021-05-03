import { Col, Row, Tooltip } from "antd";
import { connect } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import { actGetCategories } from "../../redux/actions/categories";
import { useEffect } from "react";
import { msToTime } from "../../utils/common";
import {
  actGetSchedules,
  actGetFlashSaleProductSchedulesFromEcommerce,
  actGetTodaySaleProductSchedulesFromEcommerce,
} from "../../redux/actions/schedules";
import {
  Container,
  Ecommerce,
  EcommerceName,
  ProductCategory,
  SaleSchedules,
  SaleScheduleItem,
  SaleScheduleTime,
  SaleScheduleStatus,
  SaleScheduleItems,
  SaleScheduleBtnUpdate,
  ReloadOutlinedCustom,
} from "./styled";

function Product({
  history,
  categories,
  actGetCategories,
  schedules,
  actGetSchedules,
  actGetFlashSaleProductSchedulesFromEcommerce,
  actGetTodaySaleProductSchedulesFromEcommerce,
}) {
  useEffect(() => {
    if (categories.length <= 0) {
      actGetCategories();
    }

    actGetSchedules();
  }, []);

  return (
    <Container>
      <Ecommerce>
        <EcommerceName>TIKI</EcommerceName>

        <SaleSchedules>
          <SaleScheduleItems>
            {schedules
              .filter(({ ecommerce }) => ecommerce === "TIKI")
              .map(({ isActive, startTime }, index) => (
                <SaleScheduleItem key={index} active={isActive}>
                  <SaleScheduleTime>{msToTime(startTime)}</SaleScheduleTime>
                  <SaleScheduleStatus>
                    {isActive ? "Đang diễn ra" : "Sắp diễn ra"}
                  </SaleScheduleStatus>
                </SaleScheduleItem>
              ))}
          </SaleScheduleItems>

          <SaleScheduleBtnUpdate>
            <Tooltip title="Lấy lịch sales mới">
              <ReloadOutlinedCustom
                onClick={actGetTodaySaleProductSchedulesFromEcommerce}
              />
            </Tooltip>
          </SaleScheduleBtnUpdate>
        </SaleSchedules>

        <ProductCategory>
          <Row gutter={[16, 16]}>
            {categories
              .filter(
                ({ ecommerce, type }) =>
                  ecommerce === "TIKI" && type === "PRODUCT"
              )
              .map(({ _id, imageUrl, name, ecommerce }, index) => (
                <Col
                  key={index}
                  span={4}
                  onClick={() =>
                    history.push({
                      pathname: `/product/${ecommerce.toLowerCase()}/${_id}`,
                    })
                  }
                >
                  <CategoryCard imageUrl={imageUrl} name={name} />
                </Col>
              ))}
          </Row>
        </ProductCategory>
      </Ecommerce>

      <Ecommerce>
        <EcommerceName>SHOPEE</EcommerceName>

        <SaleSchedules>
          <SaleScheduleItems>
            {schedules
              .filter(({ ecommerce }) => ecommerce === "SHOPEE")
              .map(({ isActive, startTime }, index) => (
                <SaleScheduleItem key={index} active={isActive}>
                  <SaleScheduleTime>{msToTime(startTime)}</SaleScheduleTime>
                  <SaleScheduleStatus>
                    {isActive ? "Đang diễn ra" : "Sắp diễn ra"}
                  </SaleScheduleStatus>
                </SaleScheduleItem>
              ))}
          </SaleScheduleItems>

          <SaleScheduleBtnUpdate>
            <Tooltip title="Lấy lịch sales mới">
              <ReloadOutlinedCustom
                onClick={actGetFlashSaleProductSchedulesFromEcommerce}
              />
            </Tooltip>
          </SaleScheduleBtnUpdate>
        </SaleSchedules>

        <ProductCategory>
          <Row gutter={[16, 16]}>
            {categories
              .filter(
                ({ ecommerce, type }) =>
                  ecommerce === "SHOPEE" && type === "PRODUCT"
              )
              .map(({ _id, imageUrl, name, ecommerce }, index) => (
                <Col
                  key={index}
                  span={4}
                  onClick={() =>
                    history.push({
                      pathname: `/product/${ecommerce.toLowerCase()}/${_id}`,
                    })
                  }
                >
                  <CategoryCard imageUrl={imageUrl} name={name} />
                </Col>
              ))}
          </Row>
        </ProductCategory>
      </Ecommerce>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  schedules: state.schedules,
});

const mapDispatchToProps = {
  actGetCategories,
  actGetSchedules,
  actGetFlashSaleProductSchedulesFromEcommerce,
  actGetTodaySaleProductSchedulesFromEcommerce,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

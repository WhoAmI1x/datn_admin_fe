import { Col, Row } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import { actGetCategories } from "../../redux/actions/categories";
import {
  Container,
  DiscountCodeCategories,
  Ecommerce,
  EcommerceName,
} from "./styled";

function DiscountCode({ history, actGetCategories, categories }) {
  useEffect(() => {
    if (categories.length <= 0) {
      actGetCategories();
    }
  }, []);

  return (
    <Container>
      <Ecommerce>
        <EcommerceName>TIKI</EcommerceName>
        <DiscountCodeCategories>
          <Row gutter={[16, 16]}>
            {categories
              .filter(
                ({ ecommerce, type }) =>
                  ecommerce === "TIKI" && type === "DISCOUNT_CODE"
              )
              .map(({ _id, imageUrl, name, ecommerce }) => (
                <Col
                  span={4}
                  onClick={() =>
                    history.push({
                      pathname: `/discount-code/${ecommerce.toLowerCase()}/${_id}`,
                      state: {
                        name,
                      },
                    })
                  }
                >
                  <CategoryCard imageUrl={imageUrl} name={name} />
                </Col>
              ))}
          </Row>
        </DiscountCodeCategories>
      </Ecommerce>

      <Ecommerce>
        <EcommerceName>SHOPEE</EcommerceName>
        <DiscountCodeCategories>
          <Row gutter={[16, 16]}>
            {categories
              .filter(
                ({ ecommerce, type }) =>
                  ecommerce === "SHOPEE" && type === "DISCOUNT_CODE"
              )
              .map(({ _id, imageUrl, name, ecommerce }) => (
                <Col
                  span={4}
                  onClick={() =>
                    history.push({
                      pathname: `/discount-code/${ecommerce.toLowerCase()}/${_id}`,
                      state: {
                        name,
                      },
                    })
                  }
                >
                  <CategoryCard imageUrl={imageUrl} name={name} />
                </Col>
              ))}
          </Row>
        </DiscountCodeCategories>
      </Ecommerce>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = { actGetCategories };

export default connect(mapStateToProps, mapDispatchToProps)(DiscountCode);

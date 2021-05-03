/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Image, Modal, Progress, Rate, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actGetCategories } from "../../redux/actions/categories";
import { getDateStringAndTime } from "../../utils/common";
import { BASE_API_URL } from "../../utils/constants";
import {
  actGetProductsByCategory,
  actGetProductsByCategoryFromEcommerce,
  actGetProductDetail,
} from "../../redux/actions/product";
const {
  Container,
  ButtonCustom,
  CategoryTitle,
  ImageCustom,
} = require("./styled");

function ProductByCategory({
  match: {
    params: { ecommerce, categoryId },
  },
  categories,
  actGetCategories,
  actGetProductsByCategory,
  actGetProductsByCategoryFromEcommerce,
  products,
}) {
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "imageUrls",
      render: (imageUrls) => <ImageCustom src={imageUrls[0]} />,
    },
    {
      title: "Tên",
      width: 300,
      render: (product) => (
        <a onClick={() => handleGetProductDetail(product._id)}>
          {product.name}
        </a>
      ),
    },
    {
      title: "Giá mới",
      dataIndex: "price",
    },
    {
      title: "Giá cũ",
      dataIndex: "priceBeforeDiscount",
    },
    {
      title: "Giảm",
      dataIndex: "discountPercent",
      render: (discountPercent) => `Giảm ${discountPercent}%`,
    },
    {
      title: "Đánh giá",
      dataIndex: "rateAverage",
      render: (rateAverage) => (
        <Progress
          percent={Math.floor((rateAverage * 100) / 5)}
          steps={5}
          size="small"
          strokeColor="#52c41a"
        />
      ),
    },
    {
      title: "Hạn giảm giá",
      dataIndex: "endTime",
      render: (endTime) => getDateStringAndTime(endTime),
    },
    {
      title: "Số lượng",
      width: 10,
      dataIndex: "quantity",
    },
    {
      title: "Đã bán",
      width: 10,
      dataIndex: "quantitySold",
    },
    {
      title: "Còn lại",
      width: 10,
      dataIndex: "quantityRemain",
    },
  ];

  const [productFullInfo, setProductFullInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(true);

  const currentCategory =
    categories.find(({ _id }) => categoryId === _id) || {};

  const handleGetProductDetail = (productId) => {
    setIsModalVisible(true);
    // actGetProductDetail(productId, (pFInfo) => setProductFullInfo(pFInfo));
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (categories.length <= 0) {
      actGetCategories();
    }

    actGetProductsByCategory(categoryId);
  }, []);

  return (
    <Container>
      <ButtonCustom
        type="primary"
        onClick={() =>
          actGetProductsByCategoryFromEcommerce(ecommerce, categoryId)
        }
      >
        Cập nhật sản phẩm từ sàn
      </ButtonCustom>

      <CategoryTitle>
        <Image
          width={40}
          height={40}
          preview={false}
          src={`${BASE_API_URL}${currentCategory.imageUrl}`}
        />
        &nbsp;
        {currentCategory.name}
      </CategoryTitle>

      <Table
        rowKey={(product) => product.mainId}
        columns={columns}
        dataSource={products}
      />

      <Modal
        title={productFullInfo.name || "Chi tiết sản phẩm"}
        visible={isModalVisible}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Ảnh:</b>
              </Col>
              <Col span={17}>
                <Image
                  src={
                    productFullInfo.imageUrls && productFullInfo.imageUrls[0]
                  }
                  width="100px"
                />
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Tên sản phẩm:</b>
              </Col>
              <Col span={17}>{productFullInfo.name}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Giá mới:</b>
              </Col>
              <Col span={17}>{productFullInfo.price}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Giá cũ:</b>
              </Col>
              <Col span={17}>{productFullInfo.price}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Giá cũ:</b>
              </Col>
              <Col span={17}>{productFullInfo.priceBeforeDiscount}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Giảm:</b>
              </Col>
              <Col span={17}>{`Giảm ${productFullInfo.discountPercent}%`}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Đánh giá:</b>
              </Col>
              <Col span={17}>{productFullInfo.rateAverage}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Hạn giảm giá:</b>
              </Col>
              <Col span={17}>
                {getDateStringAndTime(productFullInfo.endTime)}
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Tổng số lượng:</b>
              </Col>
              <Col span={17}>{productFullInfo.quantity}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Đã bán:</b>
              </Col>
              <Col span={17}>{productFullInfo.quantitySold}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Còn lại:</b>
              </Col>
              <Col span={17}>{productFullInfo.quantityRemain}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Link sản phẩm:</b>
              </Col>
              <Col span={17}>
                <a href={`${productFullInfo.productUrl}`} target="_blank">
                  {productFullInfo.productUrl}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

const mapDispatchToProps = {
  actGetProductsByCategory,
  actGetCategories,
  actGetProductsByCategoryFromEcommerce,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductByCategory);

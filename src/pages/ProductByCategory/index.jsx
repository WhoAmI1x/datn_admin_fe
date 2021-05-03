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
import { Link } from "react-router-dom";
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
        <Link to={`/product/${product._id}`}>{product.name}</Link>
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

  const currentCategory =
    categories.find(({ _id }) => categoryId === _id) || {};

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

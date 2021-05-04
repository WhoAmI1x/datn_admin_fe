/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from "react-redux";
import { Container } from "../DiscountCode/styled";
import { ButtonCustom, CategoryTitle, ImageCustom } from "./styled";
import { actGetCategories } from "../../redux/actions/categories";
import {
  actDeleteDiscountCodeById,
  actGetDiscountCodeByCategory,
  actGetDiscountCodesByCategoryFromEcommerce,
} from "../../redux/actions/discountCode";
import { useEffect, useState } from "react";
import { Button, Col, Image, Modal, Popconfirm, Row, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../utils/constants";
import { getDateStringAndTime } from "../../utils/common";

function DiscountCodeByCategory({
  match: {
    params: { ecommerce, categoryId },
  },
  categories,
  actGetCategories,
  actGetDiscountCodeByCategory,
  actGetDiscountCodesByCategoryFromEcommerce,
  actDeleteDiscountCodeById,
  discountCodes,
}) {
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "imageUrl",
      render: (imageUrl) => <ImageCustom src={imageUrl} />,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
    },
    {
      title: "Mã",
      render: (discountCode) => (
        <a onClick={() => handleShowDiscountCodeDetail(discountCode._id)}>
          {discountCode.code}
        </a>
      ),
    },
    {
      title: "Sàn thương mại",
      dataIndex: "ecommerce",
    },
    {
      title: "Hạn dùng",
      dataIndex: "expires",
      render: (expires) => getDateStringAndTime(expires),
    },
    {
      title: "Người sử dụng",
      dataIndex: "userIds",
      render: (userIds) => {},
    },
    {
      title: "Hành động",
      dataIndex: "_id",
      render: (_id) => (
        <Popconfirm
          title="Xóa mã?"
          onConfirm={() => actDeleteDiscountCodeById(_id)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <Button type="primary" danger>
            Xóa
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDiscountCode, setCurrentDiscountCode] = useState({});

  const currentCategory =
    categories.find(({ _id }) => categoryId === _id) || {};

  const handleShowDiscountCodeDetail = (discountCodeId) => {
    setIsModalVisible(true);
    setCurrentDiscountCode(
      discountCodes.find((discountCode) => discountCode._id === discountCodeId)
    );
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setCurrentDiscountCode({});
  };

  useEffect(() => {
    if (categories.length <= 0) {
      actGetCategories();
    }

    actGetDiscountCodeByCategory(categoryId);
  }, []);

  return (
    <Container>
      <ButtonCustom
        type="primary"
        onClick={() =>
          actGetDiscountCodesByCategoryFromEcommerce(ecommerce, categoryId)
        }
      >
        Cập nhật mã từ sàn
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
        rowKey={(discountCode) => discountCode.mainId}
        columns={columns}
        dataSource={discountCodes}
      />

      <Modal
        title={currentDiscountCode.title}
        visible={isModalVisible}
        onCancel={handleClose}
        footer={false}
      >
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Ảnh:</b>
              </Col>
              <Col span={17}>
                <Image src={currentDiscountCode.imageUrl} width="100px" />
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Tiêu đề:</b>
              </Col>
              <Col span={17}>{currentDiscountCode.title}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Mã giảm giá:</b>
              </Col>
              <Col span={17}>
                <a>{currentDiscountCode.code}</a>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Sàn thương mại:</b>
              </Col>
              <Col span={17}>{currentDiscountCode.ecommerce}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Hạn sử dụng:</b>
              </Col>
              <Col span={17}>
                {getDateStringAndTime(currentDiscountCode.expires)}
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Định danh chính:</b>
              </Col>
              <Col span={17}>{currentDiscountCode.mainId}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Định danh shop:</b>
              </Col>
              <Col span={17}>{currentDiscountCode.shopId}</Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Người sử dụng:</b>
              </Col>
              <Col span={17}>
                {currentDiscountCode.userIds?.map(() => (
                  <Tag color="blue">Mr.A</Tag>
                ))}
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row align="middle" gutter={[16, 0]}>
              <Col span={7} align="end">
                <b>Mô tả:</b>
              </Col>
              <Col span={17}>{currentDiscountCode.description}</Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  discountCodes: state.discountCodes,
  categories: state.categories,
});

const mapDispatchToProps = {
  actGetDiscountCodeByCategory,
  actGetDiscountCodesByCategoryFromEcommerce,
  actDeleteDiscountCodeById,
  actGetCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscountCodeByCategory);

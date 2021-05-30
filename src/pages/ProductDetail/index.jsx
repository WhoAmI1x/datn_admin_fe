/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { actGetProductDetail } from "../../redux/actions/product";
import { connect } from "react-redux";
import { Col, Descriptions, Image, Progress, Row, Table } from "antd";
import {
  ColCustom,
  Container,
  DescriptionsCustom,
  DetailInfo,
  ImageCustom,
  ProductContent,
  ProductName,
  RowCustom,
  SessionTitle,
  Specifications,
} from "./styled";
import {
  getDateStringAndTime,
  isFalsyValue,
  moneyFormat,
} from "../../utils/common";

function ProductDetail({
  match: {
    params: { productId },
  },
  actGetProductDetail,
}) {
  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      align: "end",
      width: 200,
      render: (label) => <b>{label}:</b>,
    },
    {
      title: "Value",
      render: (obj) => {
        if (obj.key === "discountPercent") {
          return `Giảm ${obj.value}%`;
        } else if (obj.key === "productUrl") {
          return (
            <a href={obj.value} target="_blank">
              {obj.value}
            </a>
          );
        } else if (obj.key.toString().includes("price")) {
          return moneyFormat(obj.value);
        } else if (obj.key === "rateAverage") {
          return (
            <Progress
              percent={Math.floor((obj.value * 100) / 5)}
              steps={5}
              size="small"
              strokeColor="#52c41a"
            />
          );
        } else {
          return obj.value;
        }
      },
    },
  ];

  const [productFullInfo, setProductFullInfo] = useState({});
  const [currentImage, setCurrentImage] = useState("");

  const labels = {
    price: "Giá mới",
    priceBeforeDiscount: "Giá cũ",
    discountPercent: "Giảm",
    rateAverage: "Đánh giá",
    endTime: "Hạn giảm giá",
    quantity: "Tổng số lượng",
    quantitySold: "Số đã bán",
    quantityRemain: "Số còn lại",
    productUrl: "Link sản phẩm chính",
  };

  const dataSource = Object.keys(labels).map((key) => ({
    key,
    label: labels[key],
    value:
      key === "endTime"
        ? getDateStringAndTime(productFullInfo[key])
        : productFullInfo[key],
  }));

  useEffect(() => {
    actGetProductDetail(productId, (pFInfo) => {
      setProductFullInfo(pFInfo);
      setCurrentImage(pFInfo.imageUrls && pFInfo.imageUrls[0]);
    });
  }, []);

  return (
    <Container>
      <ProductName>{productFullInfo.name}</ProductName>
      <ProductContent>
        <RowCustom gutter={[16, 16]}>
          <Col span={10}>
            <Row gutter={[0, 32]}>
              <Col span={24}>
                <Image preview={false} src={currentImage} />
              </Col>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  {productFullInfo.imageUrls?.map((image) => (
                    <Col span={6}>
                      <ImageCustom
                        isActive={currentImage === image}
                        src={image}
                        preview={false}
                        onClick={() => setCurrentImage(image)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <ColCustom span={14}>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              showHeader={false}
              bordered={false}
            />
          </ColCustom>
        </RowCustom>
      </ProductContent>

      <DescriptionsCustom title="THÔNG TIN THÊM" bordered column={1}>
        {productFullInfo.productDetail?.map(
          ({ name, value }) =>
            !isFalsyValue(value) && (
              <Descriptions.Item label={name}>{value}</Descriptions.Item>
            )
        )}
      </DescriptionsCustom>

      <SessionTitle>MÔ TẢ SẢN PHẨM</SessionTitle>
      <Specifications>
        {productFullInfo.productDescription?.replace(/\n\s*\n/g, "\n")}
      </Specifications>
    </Container>
  );
}

const mapDispatchToProps = {
  actGetProductDetail,
};

export default connect(null, mapDispatchToProps)(ProductDetail);

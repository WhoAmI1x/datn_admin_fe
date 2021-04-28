/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../utils/constants";
import { PlusCircleOutlined } from "@ant-design/icons";
import {
  actGetCategories,
  actDeleteCategory,
  actUpdateCategory,
  actCreateCategory,
} from "../../redux/actions/categories";
import {
  Button,
  Input,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import {
  Container,
  FilterItem,
  FilterWrapper,
  FilterItemText,
  ImageCustom,
  FormContainer,
  FormItem,
  FormItemTitle,
  FormItemInput,
  ButtonCustom,
} from "./styled";
import UploadImage from "../../components/UploadImage";

const { Option } = Select;
const { Search } = Input;

function Category({
  actGetCategories,
  categories,
  actDeleteCategory,
  actUpdateCategory,
  actCreateCategory,
}) {
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "imageUrl",
      render: (imageUrl) => <ImageCustom src={`${BASE_API_URL}${imageUrl}`} />,
    },
    {
      title: "Tên",
      render: (category) => (
        <Link to="/category" onClick={() => handleClickCategory(category._id)}>
          {category.name}
        </Link>
      ),
    },
    {
      title: "Sàn thương mại",
      dataIndex: "ecommerce",
    },
    {
      title: "Thể loại",
      dataIndex: "type",
      render: (type) => (
        <Tag color={type === "DISCOUNT_CODE" ? "blue" : "cyan"}>{type}</Tag>
      ),
    },
    {
      title: "Trường định danh",
      dataIndex: "detectField",
    },
    {
      title: "Giá trị định danh",
      dataIndex: "detectValue",
    },
    {
      title: "Mã định danh chính",
      dataIndex: "mainId",
    },
    {
      title: "Hành động",
      dataIndex: "_id",
      render: (_id) => (
        <Popconfirm
          title="Xóa danh mục?"
          onConfirm={() => actDeleteCategory(_id)}
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

  const [ecommerce, setEcommerce] = useState();
  const [type, setType] = useState();
  const [keyword, setKeyword] = useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  const [image, setImage] = useState({
    preview: "",
    raw: "",
  });

  const handleChangeEcommerce = (ecommerceValue) => {
    setEcommerce(ecommerceValue);
  };

  const handleChangeType = (typeValue) => {
    setType(typeValue);
  };

  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  const handleClickCategory = (categoryId) => {
    setIsShowModal(true);
    setCurrentCategory(
      categories.find((category) => category._id === categoryId)
    );
  };

  const handleChangeCategory = ({ target: { name, value } }) => {
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const handleCreateOrUpdateCategory = () => {
    const formData = new FormData();
    formData.append("name", currentCategory.name);
    formData.append("ecommerce", currentCategory.ecommerce);
    formData.append("type", currentCategory.type);
    formData.append("detectField", currentCategory.detectField);
    formData.append("detectValue", currentCategory.detectValue);
    formData.append("mainId", currentCategory.mainId);
    !!image.raw && formData.append("image", image.raw);

    if (currentCategory._id) {
      actUpdateCategory(currentCategory._id, formData);
    } else {
      actCreateCategory(formData);
    }

    handleCancel();
  };

  const handleCancel = (e) => {
    setIsShowModal(false);
    setCurrentCategory({});
    setImage({ preview: "", raw: "" });
  };

  const handleClickCreateCategory = () => {
    setIsShowModal(true);
  };

  useEffect(() => {
    actGetCategories(ecommerce, type, keyword);
  }, [ecommerce, type, keyword]);

  useEffect(() => {
    setImage(() => ({
      preview:
        image.preview ||
        (currentCategory.imageUrl
          ? `${BASE_API_URL}${currentCategory.imageUrl}`
          : ""),
      raw: image.raw || "",
    }));
  }, [currentCategory]);

  return (
    <Container>
      <ButtonCustom
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={handleClickCreateCategory}
      >
        Thêm danh mục
      </ButtonCustom>

      <FilterWrapper>
        <FilterItem>
          <Space>
            <FilterItemText>Sàn thương mại:</FilterItemText>

            <Select
              onChange={handleChangeEcommerce}
              placeholder="Chọn sàn thương mại"
              value={ecommerce}
              allowClear
            >
              <Option value="TIKI">Tiki</Option>
              <Option value="SHOPEE">Shopee</Option>
            </Select>
          </Space>
        </FilterItem>

        <FilterItem>
          <Space>
            <FilterItemText>Loại danh mục:</FilterItemText>

            <Select
              onChange={handleChangeType}
              placeholder="Chọn loại danh mục"
              value={type}
              allowClear
            >
              <Option value="DISCOUNT_CODE">Mã giảm giá</Option>
              <Option value="PRODUCT">Sản phẩm</Option>
            </Select>
          </Space>
        </FilterItem>

        <FilterItem>
          <Search
            placeholder="Nhập tên danh mục"
            allowClear
            enterButton="Tìm kiếm"
            onSearch={handleSearch}
          />
        </FilterItem>
      </FilterWrapper>

      <Table
        rowKey={(category) => category._id}
        columns={columns}
        dataSource={categories}
      />

      <Modal
        title={currentCategory._id ? "Chỉnh sửa danh mục" : "Thêm mới danh mục"}
        cancelText="Hủy"
        okText={currentCategory._id ? "Cập nhật" : "Tạo"}
        visible={isShowModal}
        onOk={handleCreateOrUpdateCategory}
        onCancel={handleCancel}
      >
        <FormContainer>
          <FormItem>
            <FormItemTitle>Ảnh</FormItemTitle>
            <FormItemInput>
              <UploadImage image={image} setImage={setImage} />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Tên danh mục:</FormItemTitle>
            <FormItemInput>
              <Input
                name="name"
                value={currentCategory.name}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Sàn thương mại:</FormItemTitle>
            <FormItemInput>
              <Input
                name="ecommerce"
                value={currentCategory.ecommerce}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Thể loại:</FormItemTitle>
            <FormItemInput>
              <Input
                name="type"
                value={currentCategory.type}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Trường định danh:</FormItemTitle>
            <FormItemInput>
              <Input
                name="detectField"
                value={currentCategory.detectField}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Giá trị định danh:</FormItemTitle>
            <FormItemInput>
              <Input
                name="detectValue"
                value={currentCategory.detectValue}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>

          <FormItem>
            <FormItemTitle>Mã định danh chính:</FormItemTitle>
            <FormItemInput>
              <Input
                name="mainId"
                value={currentCategory.mainId}
                onChange={handleChangeCategory}
              />
            </FormItemInput>
          </FormItem>
        </FormContainer>
      </Modal>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  actGetCategories,
  actDeleteCategory,
  actUpdateCategory,
  actCreateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

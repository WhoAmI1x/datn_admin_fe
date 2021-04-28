import { Button, Input, message, Popconfirm, Space, Table, Tag } from "antd";
import { connect } from "react-redux";
import { Container, SearchWrapper } from "./styled";
import { actGetAllUser, actDeleteUser } from "../../redux/actions/normalUser";
import { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

function User({ allUser, actGetAllUser, actDeleteUser }) {
  const columns = [
    {
      title: "Tên",
      dataIndex: "fullName",
      render: (fullName) => <Link to="/user">{fullName}</Link>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      render: (role) => (
        <Tag color={role === "ADMIN" ? "green" : "red"} key={role}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Tên tài khoản shopee",
      dataIndex: "shopeeAccount",
      render: (shopeeAccount) => <b>{shopeeAccount?.username}</b>,
    },
    {
      title: "Tên tài khoản tiki",
      dataIndex: "tikiAccount",
      render: (tikiAccount) => <b>{tikiAccount?.username}</b>,
    },
    {
      title: "Hành động",
      dataIndex: "_id",
      render: (_id) => (
        <Popconfirm
          title="Xóa người dùng?"
          onConfirm={() => actDeleteUser(_id)}
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

  useEffect(() => {
    actGetAllUser();
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <Search
          placeholder="Nhập email người dùng"
          allowClear
          enterButton="Tìm kiếm"
          size="large"
          onSearch={(keyword) => actGetAllUser(keyword)}
        />
      </SearchWrapper>

      <Table
        rowKey={(user) => user.email}
        columns={columns}
        dataSource={allUser}
      />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  allUser: state.normalUser,
});

const mapDispatchToProps = {
  actGetAllUser,
  actDeleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);

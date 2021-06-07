import { Image } from "antd";
import {
  ApiOutlined,
  DashboardOutlined,
  DollarOutlined,
  OrderedListOutlined,
  ShoppingOutlined,
  SkinOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Account,
  Container,
  Menu,
  MenuItem,
  AvatarImage,
  FullName,
  Info,
  Email,
  MenuItemIcon,
  MenuItemText,
} from "./styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function SideBar({ user, location }) {
  const currentPage = location.pathname.split("/")[1];

  return (
    <Container>
      <Account>
        <AvatarImage>
          <Image src="/images/avatar.png" preview={false} />
        </AvatarImage>
        <Info>
          <FullName>{user.fullName}</FullName>
          <Email>{user.email}</Email>
        </Info>
      </Account>
      <Menu>
        <Link to="/dashboard">
          <MenuItem isActive={currentPage === "dashboard"}>
            <MenuItemIcon>
              <DashboardOutlined />
            </MenuItemIcon>
            <MenuItemText>Thống kê</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/user">
          <MenuItem isActive={currentPage === "user"}>
            <MenuItemIcon>
              <UserOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý người dùng</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/category">
          <MenuItem isActive={currentPage === "category"}>
            <MenuItemIcon>
              <OrderedListOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý danh mục</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/discount-code">
          <MenuItem isActive={currentPage === "discount-code"}>
            <MenuItemIcon>
              <DollarOutlined />
            </MenuItemIcon>
            <MenuItemText>Mã giảm giá</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/product">
          <MenuItem isActive={currentPage === "product"}>
            <MenuItemIcon>
              <SkinOutlined />
            </MenuItemIcon>
            <MenuItemText>Sản phẩm</MenuItemText>
          </MenuItem>
        </Link>

        {/* <Link to="/api-url">
          <MenuItem isActive={}>
            <MenuItemIcon>
              <ApiOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý Apis</MenuItemText>
          </MenuItem>
        </Link> */}
      </Menu>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SideBar);

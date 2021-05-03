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

function SideBar({ user }) {
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
          <MenuItem>
            <MenuItemIcon>
              <DashboardOutlined />
            </MenuItemIcon>
            <MenuItemText>Thống kê</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/user">
          <MenuItem>
            <MenuItemIcon>
              <UserOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý người dùng</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/category">
          <MenuItem>
            <MenuItemIcon>
              <OrderedListOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý danh mục</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/discount-code">
          <MenuItem>
            <MenuItemIcon>
              <DollarOutlined />
            </MenuItemIcon>
            <MenuItemText>Mã giảm giá</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/product">
          <MenuItem>
            <MenuItemIcon>
              <SkinOutlined />
            </MenuItemIcon>
            <MenuItemText>Sản phẩm</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/api-urls">
          <MenuItem>
            <MenuItemIcon>
              <ApiOutlined />
            </MenuItemIcon>
            <MenuItemText>Quản lý Apis</MenuItemText>
          </MenuItem>
        </Link>
      </Menu>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SideBar);

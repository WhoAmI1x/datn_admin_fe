import { Image } from "antd";
import {
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

function SideBar({}) {
  return (
    <Container>
      <Account>
        <AvatarImage>
          <Image src="/images/avatar.png" preview={false} />
        </AvatarImage>
        <Info>
          <FullName>Trần Trung Huỳnh</FullName>
          <Email>trantrunghuynh1998@gmail.com</Email>
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
      </Menu>
    </Container>
  );
}

export default SideBar;

import styled from "styled-components";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 60px;
    background-color: #5664D2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-weight: bold;
    padding: 0 40px;
`;

export const DashboardIcon = styled(Link)`
    width: 38px;
    height: 38px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const LogoutOutlinedIcon = styled(LogoutOutlined)`
    font-size: 30px;
    cursor: pointer;
`;
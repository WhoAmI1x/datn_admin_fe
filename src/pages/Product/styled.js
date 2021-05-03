import { ReloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const Ecommerce = styled.div`
    &:nth-child(1) {
        margin-bottom: 20px;
    }
`;

export const EcommerceName = styled.div`
    height: 100px;
    background-color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const ProductCategory = styled.div`
`;

export const SaleSchedules = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const SaleScheduleItems = styled.div`
    flex: 1;
    background-color: #fff;
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
`;

export const SaleScheduleItem = styled.div`
    width: 100%;
    padding: 10px;
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    ${props => props.active && "border-bottom: 4px solid #1890FF;"}
`;

export const SaleScheduleTime = styled.div`
    font-size: 20px;

`;

export const SaleScheduleStatus = styled.div`
    font-size: 13px;
    color: #bbb;
`;

export const SaleScheduleBtnUpdate = styled.div``;

export const ReloadOutlinedCustom = styled(ReloadOutlined)`
    font-size: 24px;
    cursor: pointer;
    
    &:hover {
        color: #1890FF;
    }
`;
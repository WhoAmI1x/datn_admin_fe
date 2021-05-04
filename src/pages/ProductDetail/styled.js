import { Col, Descriptions, Image, Row } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const ProductName = styled.div`
    height: 100px;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 500;
`;

export const ImageCustom = styled(Image)`
    width: 80px;
    cursor: pointer;

    &:hover {
        border: 1px solid #1890FF;
    }

    ${props => props.isActive && "border: 1px solid #1890FF;"}
`;

export const ProductContent = styled.div`
    overflow: hidden;
    padding-top: 20px;
    background-color: #fff;
`;

export const RowCustom = styled(Row)`
`;

export const ColCustom = styled(Col)`
    .ant-table-tbody > tr > td {
        border-bottom: none;
    }
`;

export const DetailInfo = styled.div`
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
`;

export const DescriptionsCustom = styled(Descriptions)`
    margin-top: 20px;

    .ant-descriptions-header {
        margin-bottom: 4px;

        .ant-descriptions-title {
            font-size: 20px;
            font-weight: 500;
        }
    }

    .ant-descriptions-view {
        background-color: #fff;

        .ant-descriptions-item-label {
            font-weight: 500;
        }
    }
`;

export const SessionTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 20px;
`;

export const Specifications = styled.blockquote`
    background-color: #fff;
    padding: 20px;
    white-space: pre-line;
`;
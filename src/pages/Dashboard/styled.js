import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    // background-color: green;

    & .ant-row:nth-child(1) .ant-col:nth-child(1) {
        & > div {
            background: rgb(2,0,36);
            background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(22,229,217,1) 0%, rgba(91,123,232,1) 100%);
        }
    }

    & .ant-row:nth-child(1) .ant-col:nth-child(2) {
        & > div {
            background: rgb(2,0,36);
            background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(245,78,159,1) 0%, rgba(253,114,117,1) 100%);
        }
    }

    & .ant-row:nth-child(1) .ant-col:nth-child(3) {
        & > div {
            background: rgb(2,0,36);
            background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(255,218,62,1) 0%, rgba(255,133,86,1) 100%);
        }
    }
`;

export const RowCustom = styled(Row)`
    margin-bottom: 20px;
`;

export const StatisticItem = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StatisticText = styled.div`

    & > p {
        color: #fff;
        line-height: 100%;
    }
    
    & > p:nth-child(1) {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    & > p:nth-child(2) {
        margin-bottom: 0;
    }
`;

export const StatisticIcon = styled.div`
    .anticon {
        color: #fff;
        font-size: 44px;
    }
`;
import styled from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    text-align: center;
    background-color: #fff;
    padding: 10px;
    height: 100%;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    }
`;

export const CardHead = styled.div`
    margin-bottom: 10px;

    & > img {
        width: 60px;
        height: 60px;
    }
`;

export const CardBody = styled.div`
    font-size: 12px;
    line-height: 1.5;
`;
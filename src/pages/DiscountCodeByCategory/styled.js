import { Button, Image } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const CategoryTitle = styled.div`
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
    width: 60px;
    height: 60px;
`;

export const ButtonCustom = styled(Button)`
    margin-bottom: 20px;
`;
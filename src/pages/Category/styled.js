import { Button, Image } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const FilterWrapper = styled.div`
    height: 100px;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FilterItem = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const FilterItemText = styled.div`

`;

export const ImageCustom = styled(Image)`
    width: 60px;
    height: 60px;
`;

export const FormContainer = styled.div`

`;

export const FormItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const FormItemTitle = styled.div`
    width: 30%;
    text-align: right;
    margin-right: 20px;
`;

export const FormItemInput = styled.div`
    width: 70%;
`;

export const ButtonCustom = styled(Button)`
    margin-bottom: 20px;
`;
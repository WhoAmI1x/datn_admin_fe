import { Form } from 'antd';
import styled from "styled-components";
import { devices, lessThan } from "../../utils/styles/responsive";

export const Tab = styled.div`
    margin: 0 auto;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 16px;
    text-align: center;

    span {
        display: inline-block;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #fefefe;
`;

export const LoginForm = styled.div`
    display: flex;
    max-width: 920px;
    box-shadow: 0 0 5px 5px #eee;
    background-color: #fff;

    .ant-image{
        img{
            width: 100%;
            height: 100%;
        }
    }

    .ant-btn{
        width: 100%;
        border-radius: 15px;
        background: #40ADFF;
        border: none;
    }

    @media ${lessThan(devices.laptop)}{
        max-width: 768px;
    }

    @media ${lessThan(devices.tablet)}{
        max-width: 375px;
    }
`;

export const Item = styled(Form.Item)`
    margin-bottom: 10px;

    &:nth-child(3){
        text-align: right;
    }
`;
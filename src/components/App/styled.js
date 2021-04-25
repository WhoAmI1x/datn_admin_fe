import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: ${props => props.isLoggedIn ? "60px 0 0 256px" : "0px"};
    background-color: #F4F6F8;
    display: flex;
    overflow: hidden;
`;

export const Content = styled.div`
    flex: 1;
    overflow: auto;
    padding: ${props => props.isLoggedIn ? "24px" : "0px"};

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ccc;
    }
`;

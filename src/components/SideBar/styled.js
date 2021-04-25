import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 60px;
    z-index: 110;
    width: 256px;
    height: calc(100% - 60px);
    background-color: #fff;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ededed;
    }
`;

export const Account = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
`;

export const AvatarImage = styled.div`
    .ant-image {
        width: 68px;
        height: 68px;
    }
`;

export const Info = styled.div`
    text-align: center;
`;

export const FullName = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const Email = styled.div`
    font-size: 14px;
    color: #bbb;
`;

export const Menu = styled.div`
    padding: 24px 16px 0;
`;

export const MenuItem = styled.div`
    display: flex;
    padding: 12px 8px;
    color: #5664D2;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #F8F9FE;
    }
`;

export const MenuItemIcon = styled.div`
    margin-right: 10px
`;
export const MenuItemText = styled.div`
    font-weight: 500;
`;
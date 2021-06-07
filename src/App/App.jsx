import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, AppWrapper, Content } from "./styled";
import { actGetUserInfo } from "../redux/actions/user";
import { getAccessToken, isFalsyValue } from "../utils/common";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function App({ children, userInfo, actGetUserInfo, history, location }) {
  const isLoggedIn = Object.keys(userInfo).length !== 0;

  useEffect(() => {
    if (Object.keys(userInfo).length === 0 && !isFalsyValue(getAccessToken())) {
      actGetUserInfo(history);
    }
  }, []);

  return (
    <AppWrapper>
      {isLoggedIn && (
        <>
          <Header history={history} />
          <SideBar location={location} />
        </>
      )}

      <Container isLoggedIn={isLoggedIn}>
        <Content isLoggedIn={isLoggedIn}>{children}</Content>
      </Container>
    </AppWrapper>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

const mapDispatchToProps = { actGetUserInfo };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

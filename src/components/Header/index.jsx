import React from "react";
import { Container, DashboardIcon, LogoutOutlinedIcon } from "./styled";
import { actLogOut } from "../../redux/actions/user";
import { connect } from "react-redux";

function Header({ history, actLogOut }) {
  return (
    <Container>
      <DashboardIcon to="/dashboard">
        <img src="/images/dashboard.png" alt="Dashboard" />
      </DashboardIcon>

      <LogoutOutlinedIcon onClick={() => actLogOut(history)} />
    </Container>
  );
}

const mapDispatchToProps = { actLogOut };

export default connect(null, mapDispatchToProps)(Header);

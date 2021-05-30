import { Button, Col, Form, Image, Input, Row } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { actLogIn } from "../../redux/actions/user";
import { Container, Item, LoginForm, Tab } from "./styled";

function Login({ actLogIn, history }) {
  return (
    <Container>
      <LoginForm>
        <Row align="middle" gutter={[0, { xs: 32, sm: 32, md: 0 }]}>
          <Col md={16} xs={{ span: 24 }}>
            <Image preview={false} src="/images/login.png" alt="Login" />
          </Col>

          <Col md={8} xs={{ span: 24 }}>
            <Tab>
              <span>Đăng nhập</span>
            </Tab>

            <Row justify="center" align="middle">
              <Col>
                <Form
                  layout="vertical"
                  onFinish={(account) => actLogIn(history, account)}
                >
                  <Item
                    label="Email:"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                        type: "email",
                      },
                    ]}
                  >
                    <Input />
                  </Item>

                  <Item
                    label="Password:"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Không được để trống!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Item>

                  <Item>
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </LoginForm>
    </Container>
  );
}

const mapDispatchToProps = {
  actLogIn,
};

export default connect(null, mapDispatchToProps)(Login);

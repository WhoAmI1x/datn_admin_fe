import { connect } from "react-redux";
import SpinCustom from "./styled";

function Loading({ children, isShowLoading }) {
  return (
    <SpinCustom size="large" spinning={isShowLoading}>
      {children}
    </SpinCustom>
  );
}

const mapStateToProps = (state) => ({
  isShowLoading: state.loading.isShowLoading,
});

export default connect(mapStateToProps)(Loading);

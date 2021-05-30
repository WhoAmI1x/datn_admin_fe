import { getStatistic } from "../../apis/statistic";
import { actSetLoading } from "./loading";

export const actGetStatistic = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getStatistic();

        console.log(res);

        if (res.status === 200) {
            dispatch({
                type: "SET_STATISTIC",
                payload: res.statistic
            });
        }
    } catch (e) {
        console.log(e.response);
    }
    dispatch(actSetLoading(false));
}
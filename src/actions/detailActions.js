import axios from "axios";
import { gameDetailsUrl, gameScreenShotURL } from "../api";
export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenDetail = await axios.get(gameScreenShotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenDetail.data,
    },
  });
};

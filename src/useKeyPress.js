import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { toastDataIncrement } from "./redux/toastSlice";
import { modeDataIncrement } from "./redux/modeSlice";

export default function useKeyPress() {
  const dispatch = useDispatch();
  const modeData = useSelector((state) => state.mode.modeData);

  const handler = (id) => {
    const isActive = modeData.find((x) => x.id === id).active;
    dispatch(modeDataIncrement(id));
    dispatch(
      toastDataIncrement({
        title: `${id} mode  ${isActive ? "deactivated!" : "activated!"}`,
      })
    );
  };
}

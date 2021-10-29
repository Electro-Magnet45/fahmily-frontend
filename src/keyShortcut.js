import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toastDataIncrement } from "./redux/toastSlice";

export function useKeyPress(callback, keyCode) {
  const dispatch = useDispatch();
  const handler = (event) => {
    if (event.ctrlKey && event.keyCode === keyCode) {
      callback();
      dispatch(toastDataIncrement({ title: "Clone mode activated!" }));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}

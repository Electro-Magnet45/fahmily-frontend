import React from "react";
import "./Toast.css";
import { Check, X as CloseIcon } from "@styled-icons/bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toastDataReduction } from "../redux/toastSlice";

const ToastChild = ({ toastInfo, removeToast }) => {
  return (
    <div className="toast">
      <div className="toast_container" onAnimationEnd={removeToast}>
        <div className="toast-cont_sign">
          <Check color="#68bc82" />
        </div>
        <p>{toastInfo.title}</p>
        <CloseIcon />
      </div>
    </div>
  );
};

const Toast = () => {
  const dispatch = useDispatch();
  const toastData = useSelector((state) => state.toast.toastData);
  const removeToast = () => dispatch(toastDataReduction());

  return (
    <div className="toast_div">
      {toastData.length !== 0 &&
        toastData.map((toast) => {
          return (
            <ToastChild
              key={toast._id}
              toastInfo={toast}
              removeToast={removeToast}
            />
          );
        })}
    </div>
  );
};

export default Toast;

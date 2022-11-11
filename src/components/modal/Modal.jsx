import { useContext  } from "react";
import { AppContext } from "../../contexts/AppContext";
import Login from "../Login"

const modalTypes = {
  LOGIN_MODAL: <Login />,
}

const Modal = () => {
  const { modal } = useContext(AppContext)
  const { type, active } = modal;

  return (
    <div className={`modal-wrapper ${active && "active"}`} >
      <div className="modal-content">
        {modalTypes["LOGIN_MODAL"]}
      </div>
    </div>
  )
}

Modal.defaultProps = {

}

Modal.propTypes = {
  
}

export default Modal;
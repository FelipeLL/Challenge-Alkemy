import styles from "../styles/modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={
        showModal ? `${styles.section} ${styles["active"]}` : styles.section
      }
    >
      <div className="profile">
        <div className="button">
          <i className="bx bxs-envelope"></i>
          <button onClick={() => setShowModal(true)}>Hire Me</button>
        </div>
      </div>
      <div className={`${styles["popup-outer"]}`}>
        <div className={styles["popup-box"]}>
          <div className={styles["box-header"]}>
            <p>Edit/Delete</p>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              className={styles.close}
              onClick={() => setShowModal(false)}
            />
          </div>

          <div className={styles["box-body"]}>
            <div className="text">
              <p>Are you sure you want to delete this item?</p>
            </div>
          </div>
          <div className={styles.button}>
            <button
              id="close"
              className={styles.cancel}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className={styles.send}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;

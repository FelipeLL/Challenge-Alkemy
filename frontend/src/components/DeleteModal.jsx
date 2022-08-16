import styles from "../styles/deleteModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
const DeleteModal = ({ showDeleteModal, setShowDeleteModal }) => {
  return (
    <section
      className={
        showDeleteModal
          ? `${styles.section} ${styles["active"]}`
          : styles.section
      }
    >
      <div className={`${styles["popup-outer"]}`}>
        <div className={styles["popup-box"]}>
          <div className={styles["box-header"]}>
            <p>Delete</p>

            <FontAwesomeIcon
              icon={faRectangleXmark}
              className={styles.close}
              onClick={() => setShowDeleteModal(false)}
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
              onClick={() => setShowDeleteModal(false)}
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

export default DeleteModal;

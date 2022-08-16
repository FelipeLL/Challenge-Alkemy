import styles from "../styles/income.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
const Expense = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleUpdate = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <div className={styles["income-content"]}>
        <div className={styles.title}>
          <span>Expense</span>
        </div>
        <ul className={styles["responsive-table"]}>
          <li className={styles["table-header"]}>
            <div className={`${styles["col"]} ${styles["col-1"]}`}>ID</div>
            <div className={`${styles["col"]} ${styles["col-2"]}`}>UNDER</div>
            <div className={`${styles["col"]} ${styles["col-3"]}`}>DATE</div>
            <div className={`${styles["col"]} ${styles["col-4"]}`}>AMOUNT</div>
            <div className={`${styles["col"]} ${styles["col-5"]}`}>ACTION</div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              54
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Under"
            >
              Nómina
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
            <div
              className={`${styles["col"]} ${styles["col-5"]}`}
              data-label="Amount"
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className={styles.delete}
                onClick={handleDelete}
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={styles.update}
                onClick={handleUpdate}
              />
            </div>
          </li>
        </ul>

        <EditModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </>
  );
};

export default Expense;

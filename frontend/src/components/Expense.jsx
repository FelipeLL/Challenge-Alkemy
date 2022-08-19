import styles from "../styles/income.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
const Expense = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [operations, setOperations] = useState([]);
  const { upload } = useContext(UserContext);

  useEffect(() => {
    const getOperations = async () => {
      const URI = "http://localhost:5000/operations/expenses";
      const res = await axios.get(URI);
      setOperations(res.data);
    };

    getOperations();
  }, [upload]);

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
          {operations.map((operation) => (
            <li className={styles["table-row"]} key={operation.ID_operation}>
              <div
                className={`${styles["col"]} ${styles["col-1"]}`}
                data-label="ID"
              >
                {operation.ID_operation}
              </div>
              <div
                className={`${styles["col"]} ${styles["col-2"]}`}
                data-label="Under"
              >
                {operation.under}
              </div>
              <div
                className={`${styles["col"]} ${styles["col-3"]}`}
                data-label="Date"
              >
                {operation.createdAt}
              </div>
              <div
                className={`${styles["col"]} ${styles["col-4"]}`}
                data-label="Amount"
              >
                <span>$</span>
                {operation.amount}
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
          ))}
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

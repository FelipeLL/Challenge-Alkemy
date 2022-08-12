import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className={styles["home-content"]}>
      <div className={styles["container-1"]}>
        <div className={styles.cards}>
          <div
            className={`${styles.card} ${styles["border-left-primary"]} ${styles.shadow} ${styles["h-100"]}  `}
          >
            <div className={styles["card-body"]}>
              <div>
                <div className={styles["card-title"]}>Total income</div>
                <p className={styles["card-text"]}>$40,000</p>
              </div>
              <div className={styles["card-icon"]}>
                <FontAwesomeIcon icon={faSackDollar} />
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles["border-left-primary"]} ${styles.shadow} ${styles["h-100"]} `}
          >
            <div className={styles["card-body"]}>
              <div>
                <div className={styles["card-title"]}>Total expense</div>
                <p className={styles["card-text"]}>$30,000</p>
              </div>
              <div className={styles["card-icon"]}>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.circular} ${styles["circular-card"]}  ${styles.shadow}   `}
        >
          <div className={styles["circular-title"]}>Current balance</div>
          <div className={styles["circular-progress"]}>
            <span className={styles["progress-value"]}>
              {" "}
              <span>+</span> 29.50000
            </span>
          </div>

          <span className={styles["circular-text"]}>I & E</span>
        </div>
      </div>

      <div className={styles["container-2"]}>
        <ul className={styles["responsive-table"]}>
          <li className={styles["table-header"]}>
            <div className={`${styles["col"]} ${styles["col-1"]}`}>ID</div>
            <div className={`${styles["col"]} ${styles["col-2"]}`}>DATE</div>
            <div className={`${styles["col"]} ${styles["col-3"]}`}>TYPE</div>
            <div className={`${styles["col"]} ${styles["col-4"]}`}>AMOUNT</div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
          <li className={styles["table-row"]}>
            <div
              className={`${styles["col"]} ${styles["col-1"]}`}
              data-label="ID"
            >
              42
            </div>
            <div
              className={`${styles["col"]} ${styles["col-2"]}`}
              data-label="Date"
            >
              10/08/2022
            </div>
            <div
              className={`${styles["col"]} ${styles["col-3"]}`}
              data-label="Type"
            >
              Income
            </div>
            <div
              className={`${styles["col"]} ${styles["col-4"]}`}
              data-label="Amount"
            >
              $350
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

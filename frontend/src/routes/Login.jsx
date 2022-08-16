import styles from "../styles/login.module.css";
import FormError from "../components/FormError";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidate } from "../utilities/formValidate";
import logo from "../images/logoManagement.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { required } = formValidate();

  const onSubmit = (data) => {
    try {
      alert("send");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`col-lg-5 ${styles.login}`}>
      <div className={styles.content}>
        <div className={styles["login-box"]}>
          <div className={styles.header}>
            <img src={logo} alt="logo" />
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                id="exampleInputEmail1"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                {...register("email", {
                  required,
                })}
              />
            </div>
            {errors.email && <FormError error={errors.email} />}

            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="password"
                id="exampleInputEmail2"
                placeholder="Ingresa tu contraseña"
                name="password"
                {...register("password", {
                  required,
                })}
              />
            </div>
            {errors.password && <FormError error={errors.password} />}

            <span className={styles["button-box"]}>
              <button>Iniciar Sesión</button>
            </span>
          </form>
        </div>
        <div className={styles["login-box"]}>
          <p className={styles["text"]}>
            ¿Todavía no tienes una cuenta?
            <Link to="/register">Registrarse</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

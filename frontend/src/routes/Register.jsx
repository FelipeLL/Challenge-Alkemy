import styles from "../styles/register.module.css";
import logo from "../images/logoManagement.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidate } from "../utilities/formValidate";
import FormError from "../components/FormError";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const {
    required,
    patternEmail,
    minLength,
    validateTrim,
    validateEquals,
    patternPassword,
  } = formValidate();

  const onSubmit = (data) => {
    try {
      alert("send");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles["register-box"]}>
          <div className={styles.header}>
            <img src={logo} alt="logo" />
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Correo electrónico"
                name="correo"
                {...register("correo", {
                  required,
                  pattern: patternEmail,
                })}
              />
            </div>
            {errors.correo && <FormError error={errors.correo} />}
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="password"
                placeholder="Contraseña"
                name="password"
                {...register("password", {
                  minLength,
                  validate: validateTrim,
                  pattern: patternPassword,
                })}
              />
            </div>
            {errors.password && <FormError error={errors.password} />}

            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirmar contraseña"
                name="confirmPassword"
                {...register("confirmPassword", {
                  validate: validateEquals(getValues),
                })}
              />
            </div>
            {errors.confirmPassword && (
              <FormError error={errors.confirmPassword} />
            )}

            <span className={styles["button-box"]}>
              <button>Registrarse</button>
            </span>
          </form>
        </div>
        <div className={styles["register-box"]}>
          <p className={styles["text"]}>
            ¿Ya tienes una cuenta?
            <Link to="/">Iniciar sesión</Link>
          </p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Register;

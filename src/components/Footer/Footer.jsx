import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import Mail from "../../assets/images/mail.svg?react";
import s from "./footer.module.css";

export default function Footer() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "This field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      toast(`Thank you, we will contact you soon by  ${values.email}`);

      resetForm();
    },
  });
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        Sign up for our newsletter and stay up to date on drops!
      </p>
      <form className={s.form}>
        <label className={s.label}>
          <input
            className={`${s.input} ${
              formik.touched.email && formik.errors.email && s.errorBorder
            }`}
            placeholder="Write your email here"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
          />
          <Mail className={s.icon} />
          {formik.touched.email && formik.errors.email ? (
            <div className={s.errorMessage}>{formik.errors.email}</div>
          ) : null}
        </label>
        <button className={s.btn} type="submit" onClick={formik.handleSubmit}>
          Subscribe
        </button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: "#817eff",
            color: "#fff",
          },
        }}
      />
    </footer>
  );
}

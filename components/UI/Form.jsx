import React, { useState } from "react";
import classes from "../../styles/form.module.css";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEamail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/nahlenadim@gmail.com", {
        name: name,
        message: message,
        email: email,
      })
      .then((response) => {
        if (response.data.success === "true") {
          Swal.fire({
            title: "Message Sent!",
            width: 600,
            padding: "3em",
            color: "#00fa15",
            background: "#000000 ",
            backdrop: `
              rgba(0,0,123,0.4)

              fill
            `,
          });
        } else {
          Swal.fire({
            title: "Message Not Sent!",
            width: 600,
            padding: "3em",
            color: "#00fa15",
            background: "#000000 ",
            backdrop: `
              rgba(0,0,123,0.4)

              fill
            `,
          });
        }
      })
      .catch((error) =>
        Swal.fire({
          title: "Message Not Sent!",
          width: 600,
          padding: "3em",
          color: "#00fa15",
          background: "#000000 ",
          backdrop: `
          rgba(0,0,123,0.4)

          fill
        `,
        })
      );
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEamail(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
import classes from "../../styles/form.module.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEamail] = useState("");
  const [messages, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/nahlenadim@gmail.com", {
        name: "FormSubmit",
        message: "I'm from Devro LABS",
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;

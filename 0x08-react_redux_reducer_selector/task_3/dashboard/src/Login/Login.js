import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.appBody)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input className={css(styles.input)} type="password" name="password" />
        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  input: {
    margin: "10px",
  },
});

export default Login;

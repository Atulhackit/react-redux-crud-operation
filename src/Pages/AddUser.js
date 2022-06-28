import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    avatar:''
  });

  const { name, email, contact, address ,avatar} = state;
  const history = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact||!avatar) {
      setError("Please Fill all the input Fields");
    } else {
      dispatch(addUser(state));
      history("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => history("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="standard-basic" name="name" label="Name" value={name} type="text" onChange={handleInputChange} />
        <br />
        <TextField
          id="standard-basic"
          label="email"
          name="email"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="contact"
          value={contact}
          type="number"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="address"
          value={address}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br/>
        <TextField
          id="standard-basic"
          label="avatar"
          value={avatar ||""}
          type="text"
          name="avatar"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;

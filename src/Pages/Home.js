import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../Redux/Actions";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

const useButtonStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      // flexDirection: 'column',
      justifyContent:"center",
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    marginTop: 20,
    minWidth: 900,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Home = () => {
    const ButtonStyles=useButtonStyles();
  const classes = useStyles();
  let dispatch = useDispatch();

  const { users } = useSelector((state) => state.data);
  console.log(users);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete=(id)=>{
    if(window.confirm("Are you sure want to delete user?")){
        dispatch(deleteUser(id))
    }
  }
  const history=useNavigate()
  return (
    <div>
        <div className={ButtonStyles.root}>
        <Button 
        style={{marginTop:"2em" }} 
        variant="contained" 
        color="primary"
        onClick={()=>history("/addUser")}
        >
            Add User
            </Button>
            <Button 
        style={{marginTop:"2em" }} 
        variant="contained" 
        color="primary"
        onClick={()=>history("/users")}
        >
            All Users
            </Button>
        </div>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name </StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user?.id}>
                <TableCell component="th" scope="row">
                  {user?.name}
                </TableCell>
                <TableCell align="center">{user?.email}</TableCell>
                <TableCell align="center">{user?.contact}</TableCell>
                <TableCell align="center">{user?.address}</TableCell>
                <TableCell align="center">
                  <div className={ButtonStyles.root}>
                  <ButtonGroup
                  variant="contained" color="primary" aria-label="contained primary button group"
                  >
                    <Button color="primary" onClick={()=>handleDelete(user.id)}>Delete</Button>
                    <Button color="secondary" onClick={()=>history(`/editUser/${user.id}`)}>Edit</Button>
                  </ButtonGroup>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};
export default Home;

import React, { useEffect, useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  deleteUser,
  loadUsers,
  updateUser,
  getSingleUser,
} from "../Redux/Actions";
import { useNavigate, useParams } from "react-router-dom";
import "./UserCard.css";
import { formControlUnstyledClasses } from "@mui/base";
// import {props} from "./EditUser"
const styles = { color: "#01A0E2", height: "15px" };
const Liked = { color: "red", height: "25px" };
const unliked = { color: "grey", height: "20px" };

const UserCard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  console.log("users",users)
  const [data,setData]=useState(users)
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete user?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const history = useNavigate();

  const [like, setLike] = useState(true);

  // const [data, setdata] = useState(users);
  // const handleLike = (id) => {
  //   let datacopy = data.map((el) => {
  //     if (id === el.id) {
  //       el.isLiked = !el.isLiked;
  //     }
  //     console.log(id)
  //     console.log(el,el.isLiked)
  //     return el;
  //     setdata(datacopy);
  //   });
  // };

  let handleLike = (id) => {
    console.log("id",id)

    // setState(!state.isLiked)
    let copyUser=users?.map((user,index)=>{
      if(id === user.id){
        user.isLiked = (!user.isLiked)
        console.log(user.isLiked)
        console.log("user", user)
        // dispatch(updateUser(state,id));
      }
      return user
    }
    )
    setData(copyUser)
  }
  
  console.log(data)
   
    // if(state.name){
    //   dispatch(getSingleUser(id))

    //   setState({...state,isLiked:!state.isLiked})
    //   console.log("idCard",id)
    //   console.log("state",state)
    //   setLike((like) => !like);
    //   dispatch(updateUser(state,id));
    // }
  // };  
  // useEffect(()=>{
  //   dispatch(updateUser(state));
  // },[state])
  // console.log("state",state)

  // let {id} =useParams();
  // useEffect(()=>{
  //   if(id){
  //     dispatch(getSingleUser(id))

  //   }
  // },[id])

  // useEffect(()=>{
  //   if(user){
  //    console.log("userIf",user)
  //       // setState({...user})
  //   }
  // },[user])

  return (
    <div className="container">
      <div className="cards-container">
        {data &&
          data.map((user, i) => {
            return (
              <div className="card" key={user?.id}>
                <div className="img-container">
                  <img alt="image" src={user?.avatar}></img>
                </div>
                <div className="user-details">
                  <div>
                    <p className="name">{user?.name}</p>
                    <p>
                      <AddLocationIcon style={styles} />
                      {user?.address}
                    </p>
                    {/* <div className="contact-details"> */}
                    <p>
                      <AddIcCallIcon
                        style={{ color: "#01A0E2", height: "15px" }}
                      />
                      {user?.contact}
                    </p>
                    <p>
                      <MailIcon style={{ color: "#01A0E2", height: "15px" }} />{" "}
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="buttons-container">
                  <div className="buttons">
                    <p title="Delete User">
                      <DeleteForeverIcon
                        style={{
                          color: "#e82525",
                          height: "15px",
                        }}
                        onClick={() => handleDelete(user.id)}
                      />
                    </p>
                    <p title="Edit User">
                      <ModeEditIcon
                        title="Edit User"
                        style={{
                          color: "#404061 ",
                          height: "15px",
                        }}
                        onClick={() => history(`/editUser/${user.id}`)}
                      />
                    </p>
                    <p title="Like">
                      <FavoriteIcon
                        style={user?.isLiked? Liked : unliked}
                        // className={user?.isLiked===true ? "active" :'notActive'}

                        onClick={() =>
                          handleLike(user?.id)
                        }
                      />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserCard;

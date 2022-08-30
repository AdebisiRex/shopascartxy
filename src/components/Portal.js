import React, { useState } from "react";
// import Signup from "./Signup";
import edit from "../resources/edit.png";
import bin from "../resources/bin.png";

const Portal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [allStudent, setallStudent] = useState([]);
  const signUp = () => {
    let newStudent = { firstname, lastname, email, password };
    setallStudent([...allStudent, newStudent]);
  };
  const del = (num) => {
    // let hello = confirm("Are you sure?");
    // if(hello){
      let newArray = [...allStudent];
      newArray.splice(num, 1);
      setallStudent(newArray);
      // console.log("deleted" + num);

    // }
  };

  const editer = (num) => {
    console.log(num);
    let newArray= [...allStudent]
    let newStudent = { firstname, lastname, email}

    newArray[num]= newStudent;
    setallStudent(newArray)


  };

  

  return (
    <>
      <div className="container">
        <div className="row mx-auto m-5 border rounded-2 mb-3 shadow-sm">
          <div className="col-9">
            <h2 className="text-center"> Sign Up</h2>

            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="Firstname"
              className="mb-3 form-control"
              name="firstname"
            />

            <input
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="lastname"
              className="mb-3 form-control"
              name="lastname"
            />

            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="email"
              className="mb-3 form-control"
              name="email"
            />

            <input
              onChange={(e) => setpassword(e.target.value)}
              type="text"
              placeholder="Firstname"
              className="mb-3 form-control"
              name="passowrd"
            />

            <button onClick={signUp} className="btn btn-info form-control mb-3">
              Sign up
            </button>
          </div>
          <div className="col-3 p-5 text-light bg-info">
            <h2>Register Students</h2>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            
              <tr>
              <td> S/N</td>
              <td> Firstname</td>
              <td> Lastname</td>
              <td> Email</td>
              <td> Actions</td>
              </tr>
           
            <tbody>
              {allStudent.map((student, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.email}</td>
                  <td>
                    <div
                      className="modal fade"
                      id={"exampleModal" + index}
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Edit Student Details
                            </h5>
                          </div>
                          <div className="modal-body">
                            <input
                              onChange={(e) => setFirstname(e.target.value)}
                              className="form-control mb-3 "
                              type="text"
                              placeholder={student.firstname} 
                              name="firstname"
                            />
                            <input
                              onChange={(e) => setLastname(e.target.value)}
                              className="form-control mb-3 "
                              type="text"
                              placeholder={student.lastname}
                              name = "lastname"
                            />
                            <input
                              onChange={(e) => setemail(e.target.value)}
                              className="form-control mb-3 "
                              type="text"
                              placeholder={student.email}
                              name="email"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              data-bs-dismiss="modal"
                              onClick={() => editer(index)}
                              className="btn btn-info"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={edit}
                      width={20}
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModal" + index}
                      alt=""
                      className="mx-2"
                    />
                    <img
                      src={bin}
                      onClick={() => del(index)}
                      width={20}
                      alt=""
                      className="mx-2"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Portal;

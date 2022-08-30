import {useNavigate} from "react-router-dom"

function Signup() {
  let navigate = useNavigate()
  const transfer=()=>{
    alert("Idan gan gan");
    navigate("/")
  }

  return (
    <>
      <div className="col-7 mt-5 mx-auto">
        <input type="text" className="form-control mb-3" />
        <input type="text" className="form-control mb-3" />
        <input type="text" className="form-control mb-3" />
        <input type="text" className="form-control mb-3" />
        <input type="text" className="form-control mb-3" />
        <button onClick={transfer} className="bg-danger btn form-control">Signup</button>
      </div>
    </>
  );
}

export default Signup;

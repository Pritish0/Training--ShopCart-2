import './Login.css';
import React, {useState} from 'react';
import Tooltip from '../Tooltip/Tooltip';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import { useAppContext } from "../../libs/Contextlibs";
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../Store/shopcartSlice';

function Login() {

  // const {
  //   loggedIn,
  //   setLoggedIn
  // } = useAppContext();

  const dispatch = useDispatch();

  const tooltipText =       
      <div>
        <div style={{textAlign: 'center'}}><strong>Requirements: </strong></div>
        
        <div>1. Uppercase letter - A-Z</div>
        <div>2. Lowercase letter - a-z</div>
        <div>3. Numbers - 0-9</div>
        <div>4. Special characters - !,$,#,%</div>
        <div>5. Minumum Character length - 8</div>
      </div>;

  const [formdata, setFormData] = useState({
    emailId: "",
    passWord: ""
  })

  const [error, setError] = useState({
    emailId: "",
    passWord: ""
  });

  const handleChange = (e) => {
    let newFormData = {...formdata};
    switch(e.target.name){
      case 'emailId':
        newFormData['emailId'] = e.target.value;
        break;
      case 'passWord':
        newFormData['passWord'] = e.target.value;
        break;
      default:
        console.log('error');

    }
    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {...error};
    let isFormValid = true;


    if(formdata.emailId===""){
      newError['emailId'] = "Cannot be empty";
      isFormValid = false;
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formdata.emailId))){
      newError['emailId'] = "Email should be in proper format";
      isFormValid = false;
    }
    else{
      newError['emailId'] = "";
    }

    if(formdata.passWord===""){
      newError['passWord'] = "Cannot be empty";
      isFormValid = false;
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formdata.passWord))){
      newError['passWord'] = "Password requirements not met";
      isFormValid = false;
    }
    else{
      newError['passWord'] = "";
    }

    setError(newError);


    if(isFormValid){
      // setLoggedIn(true);
      dispatch(setLoggedIn(true));
    }



  }

  return (
    <div className="loginform">
      <div className="form-container">
        <div className="login-title">Login</div>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className="inputfieldcontainer">
            <input type="text" placeholder="Email Id" className="inputfield" name="emailId" value={formdata['emailId']} onChange={handleChange} />
            {error.emailId!=="" && <span className="error">{error.emailId}</span>}
          </div>
          <br/>
          <br/>
          <div className="field-tooltip-container">
            <input type="password" placeholder="Password" className="inputfield" name="passWord" value={formdata['passWord']} onChange={handleChange} />
            <Tooltip item={<ErrorOutlineIcon style={{color: 'white'}}/>} text={tooltipText} />
          </div>
          <div className="inputfieldcontainer">
            {error.passWord!=="" && <span className="error">{error.passWord}</span>}
          </div>
          <br/>
          <br/>
          <div className="btn-container">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Login;

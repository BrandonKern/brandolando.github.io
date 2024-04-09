import { useState, useContext } from 'react';
import { GlobalContext } from '../App';



const Login = () => {
    let {setLogin
    } = useContext(GlobalContext);

    return(
      <div className={'mainContainer'} >
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={"email"}
          placeholder="Enter your email here"
        //   className={'inputBox'}
        />
        <label className="errorLabel">{""}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={"password"}
          placeholder="Enter your password here"
        //   className={'inputBox'}
        />
        <label className="errorLabel">{""}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={ () => setLogin(true)} value={'Log in'} />
      </div>
    </div>
  );
  }

  export default Login;
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {TextField, Button} from '@material-ui/core'

import {  State } from '../reducers'
import { authenticate } from '../reducers/user'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
); 

export const Login = (): JSX.Element|null => {
    const classes = useStyles();
    const user = useSelector((state:State) => state.userState)
    const dispatch = useDispatch()

    const [login, setLogin] = React.useState('');
    const [pass, setPass] = React.useState('');

    const check = ()=>{
        console.log(login, pass)
        if(login===user.login && pass === user.password) dispatch(authenticate({isAuthenticated:true}))
    }

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };

    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="login"
            label="Login"
            defaultValue={login}
            onChange={handleChangeLogin}
          />
          <TextField
            id="password"
            label="Password"
            defaultValue={pass}
            onChange={handleChangePass}
            type='password'
          />
        </div>
        <Button variant="contained" color="primary" onClick={check}>
          Login
        </Button>
      </form>
    )
} 

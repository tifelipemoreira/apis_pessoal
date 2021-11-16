import React from 'react'
import { useForm } from 'react-hook-form'
import { Avatar, Paper, Grid, ImageBitmap } from '@material-ui/core'
import { TextField, Link, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect } from "react";
import Router from 'next/router'


export default function Login() {

    //const [count, setCount] = useState(0);
    const { register, handleSubmit } = useForm();



    function handleSignIn(data) {
        if (data.username) {
            alert(data.username)
            Router.push('/')
        } else {
            alert('Preencher E-mail')
        }
    }

    //Estilo dos componentes
    const paperStyled = { padding: 20, height: "90vh", width: 300, margin: "40px auto" }
    const avatarStyled = { backgroundColor: "green" }
    const textfieldsStyled = { width: "100%", margin: "5px auto" }
    const linkStyled = { width: "100%", margin: "5px auto" }
    const buttonStyled = { height: "35px", margin: "20px auto" }

    return (
        // parei no minuto 12 do video 
        // https://www.youtube.com/watch?v=L2RnP5vhbdg 
        //Foi necessario incluir o fome para o useForm funcionar
        <Grid>

            <Paper elevation={20} style={paperStyled}>
                <div align='center'>
                    <Avatar style={avatarStyled}>
                        <LockOutlinedIcon >
                        </LockOutlinedIcon>
                    </Avatar> <h2>Login</h2>
                    <form >
                        <TextField {...register("username")} name="username" label="E-mail" placeholder="Email@host.com.br" style={textfieldsStyled} required type="email"></TextField>
                        <TextField {...register("password")} name="password" label="Senha" placeholder="SuaSenha" style={textfieldsStyled} required type="password"></TextField>
                    </form>
                </div>
                <FormControlLabel label="Lembrar me" control={
                    <Checkbox name="remember" color="primary">
                    </Checkbox>} >
                </FormControlLabel>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <Button type="submit" color="primary" variant="contained" style={buttonStyled}    >
                        Entrar
                    </Button>
                </form>
                <Link href="/forgotpassword" rel="noopener" style={linkStyled} >Esqueci Minha Senha</Link>
            </Paper>
        </Grid >
    )
}

/*

<div className={style.container}>
        {user ? (
            <span className="hello-user">Hello, {`Usuario:${user.name} `}!</span>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <h3 className="form-header">LOGIN</h3>
                </div>
                <div className="row">
                    <input
                        type="text"
                        placeholder="user name"
                        {...register('username', {
                            required: { value: true, message: 'User name is required' },
                            minLength: {
                                value: 3,
                                message: 'User name cannot be less than 3 character',
                            },
                        })}
                        className={'form-field' + (errors.username ? ' has-error' : '')}
                    />
                    {errors.username && (
                        <span className="error-label">{errors.username.message}</span>
                    )}
                </div>
                <div className="row">
                    <input
                        type="password"
                        placeholder="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Please enter your password',
                            },
                        })}
                        className={'form-field' + (errors.password ? ' has-error' : '')}
                    />
                    {errors.password && (
                        <span className="error-label">{errors.password.message}</span>
                    )}
                </div>
                <div className="row row-remember">
                    <input type="checkbox" id="remember" {...register('remember')} />
                    <label htmlFor="remember" className="remember-label">
                        Remember me
                    </label>
                </div>
                <div className="row">
                    <button type="submit" className="btn login-btn">
                        Login
                    </button>
                </div>
            </form>
        )}
    </div>
*/
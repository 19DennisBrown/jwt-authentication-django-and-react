import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import styles from './pages.module.css'

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    return (
        <div className={styles.container}>
            <form onSubmit={loginUser} className={styles.form}>
                <fieldset className={styles.fieldset} >
                    <legend>username</legend>
                    <input className={styles.input}  type="text" name="username" placeholder="Enter username" required/>
                </fieldset>
                <fieldset className={styles.fieldset} >
                    <legend>password</legend>
                    <input className={styles.input}  type="password" name="password" placeholder="enter password" required/>
                </fieldset>
                <fieldset className={styles.fieldset} >
                    <legend>submit</legend>
                    <input className={styles.input}  type="submit"/>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPage
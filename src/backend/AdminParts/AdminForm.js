import React, { useState } from 'react'
import style from './AdminFrom.module.css'


function AdminForm({ nextStep }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        if (userName === 'ADMIN' && password === '12211221') {
            setUserName('')
            setPassword('')
            nextStep(true)
        } else {
            setUserName('')
            setPassword('')
            setError(true)
        }
    }


    return (
        <div className={style.main}>
            <form
                onSubmit={submitHandler}
            >
                <h1>Admin Dahshboard</h1>
                <label>Username</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    error && <h2>Something went wrong</h2>
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdminForm

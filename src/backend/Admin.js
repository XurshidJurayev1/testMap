import React, { useState } from 'react'
import AdminForm from './AdminParts/AdminForm'

function Admin() {
    const [userEnter, setUserEnter] = useState(false)
    const nextStep = () => {
        setUserEnter(true)
    }

    return (
        <div>
            {
                !userEnter
                    ? <AdminForm nextStep={nextStep} />
                    : <h1>Hello ADMIN</h1>
            }
        </div>
    )
}

export default Admin

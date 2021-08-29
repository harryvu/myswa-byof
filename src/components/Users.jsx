import React, { useState, useEffect } from 'react'

const Users = ({url}) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
        })
    })

    return (
        <pre>
            {JSON.stringify(profile, null, 2)}
        </pre>      
    )
}

export default Users

import React, { ChangeEvent, useState } from 'react'

export default function Form() {
    const [ifo, setInfo] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleChange1 = (e:ChangeEvent<HTMLInputElement>) => {
        console.log("gọi hàm change",e)
       let {name,value} = e.target
        
        setInfo({...ifo,[name]:value})
        
    }
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log(ifo)
        setInfo ({
            username: "",
            email: "",
            password: ""
        })
    }
    return (<>
        <div>Form</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">UserName</label><br />
            <input onChange={handleChange1} 
             type="text" 
             name='username'
             value={ifo.username}/><br />
            <label htmlFor="">email</label><br />
            <input 
            type="text"
            onChange={handleChange1}
            name='email'
            value={ifo.email} /><br />
            <label htmlFor="">password</label><br />
            <input 
            type="text"
            onChange={handleChange1}
            name='password'
            value={ifo.password}/><br />
            <input type="submit" />
        </form>

    </>

    )
}

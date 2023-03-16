import React from 'react'

function Login() {
    return (
        <div className='registration-form'>

            <form action="/">
                <label htmlFor="fname">Name</label><br />
                <input type="text" id="fname" name="fname"/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" /><br /><br />
                <input type="submit"/>
            </form>

        </div>
    )
}

export default Login
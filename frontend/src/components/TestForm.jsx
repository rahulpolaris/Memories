import React from "react"


const Form = ()=>{

    return (
        <div>
        <form action="/" method = "post" >
        <div>
        <label htmlFor="userName">user:</label>
            <input type="text" name = "userName"/>

        </div>
        <div>
        <label htmlFor="userAge">Age:</label>
            <input type="text" name="userAge"/>

        </div>
        <div>
            <button type="submit"> submit</button>
        </div>

            
        </form>


        </div>
    )
}

export default Form
import axios from 'axios'

const loginUser = (email: string, password: string) => {
    const request = axios.post("http://localhost:8080/user/login", {
        "email": email,
        "password": password
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

export default loginUser;
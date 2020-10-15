import axios from "axios";
const USER_API="https://Localhost:8080/getallcustomersrecord"

class UserService {

    getUsers(){
        axios.get(USER_API);
    }
}
export default new UserService();
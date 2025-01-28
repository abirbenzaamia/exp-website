import Axios from "axios"
import { Services } from "./api"



export function createParticipant(prolific_id, ip, user_agent, age, gender, education ) {

    console.log(Services.PARTICIPANT_URL)
    const data = {
        "prolific_id" : prolific_id, 
        "ip" : ip, 
        "user_agent" : user_agent, 
        "age" : age, 
        "gender" : gender, 
        "education": education
    };
    console.log(data);
    return Axios.post(Services.PARTICIPANT_URL, data)
        
}



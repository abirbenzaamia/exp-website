import Axios from "axios"
import { Services } from "./api"



export function createParticipant(prolific_id, ip, user_agent,vpn, tpc_blocked, age, gender, education ) {

    const data = {
        "prolific_id" : prolific_id, 
        "ip" : ip, 
        "user_agent" : user_agent, 
        "vpn": vpn, 
        "tpc_blocked": tpc_blocked,
        "age" : age, 
        "gender" : gender, 
        "education": education
    };
    return Axios.post(Services.PARTICIPANT_URL, data)
        
}


export function createTestingGroup(prolific_id ) {

    const data = {
        "prolific_id" : prolific_id, 
    };
    return Axios.post(Services.TESTING_GROUP_URL, data)
        
}




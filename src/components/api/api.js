import axios from 'axios';

export const mailApi = {
    sendMsg(msgObj) {
        return axios
            .post(`https://smtp-ndjs-server.herokuapp.com/sendMsg`, {
                ...msgObj
            })
            .then(res => {
                return res.data
            })
    }
}
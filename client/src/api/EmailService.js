import axios from 'axios'

class EmailService {

    sendEmail(email) {
        return axios.post('http://localhost:8080/send-email', email);
    }
}

export default new EmailService()
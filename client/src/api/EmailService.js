import axios from 'axios';

// const EmailService = () => {
// };

const sendEmail = (email) => axios.post('http://localhost:8080/send-email', email);

export default sendEmail;

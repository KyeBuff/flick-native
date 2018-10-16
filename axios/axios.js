import axios from "axios";

const baseURL = 'http://flickapi2-env.sdqwkshunp.us-east-2.elasticbeanstalk.com/api/';

export default axios.create({
    baseURL: baseURL,
    headers: { "Accept": "application/json" },
});
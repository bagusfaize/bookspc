import axios from "axios";

const BASE_URL = 'https://my-json-server.typicode.com/cutamar/mock';

export const getAllBooks = async () => {
    return await axios.get(`${BASE_URL}/books`);
};  
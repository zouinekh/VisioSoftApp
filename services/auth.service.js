import axios from "axios";
import { baseUrl } from "../utils/baseUrls";


const uri = `${baseUrl}/auth`;

export async function login(email, password) {
    try {
        console.log(uri + `/login`);
        const response = await axios.post(`${uri}/login`, { email: email, password: password })
        console.log(response.data.token)
        if (response.data) {
            return { token: response.data.token, userId: response.data.userId }
        }
        throw new Error("something went wrong");
    } catch (error) {
        console.error("Error fetching user:", JSON.stringify(error));
        throw error;

    }
}


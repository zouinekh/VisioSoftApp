import axios from "axios";
import { baseUrl } from "../utils/baseUrls";


const uri = `${baseUrl}/meets`;

export async function getMeetsByStudents(userId) {
    try {
        console.log(uri + `/user/${userId}`);
        const response = await axios.get(`${uri}/user/${userId}`)
        let meetsData = response.data
        const formatedData = meetsData.reduce((result, meet) => {
            const startDate = meet.start.split('T')[0];
            if (!result[startDate]) {
                result[startDate] = [];
            }
            result[startDate].push(meet);
            return result;
        }, {});

        return formatedData
    } catch (error) {
        console.error("Error fetching meets:", JSON.stringify(error));

    }
}


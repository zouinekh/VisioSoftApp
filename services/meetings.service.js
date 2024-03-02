import axios from "axios";


const uri = `http://192.168.1.31:3000/meets`;

export async function getMeetsByStudents(studentId) {
    try {
        console.log(uri + `/user/${studentId}`);
        const response = await axios.get(`${uri}/user/${studentId}`)
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
        console.error("Error fetching meets:", error);

    }
}


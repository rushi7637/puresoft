import axios from 'axios';

export const fetchDashboardData = async () => {
    const response = await axios.get('/path/to/json/file.json');
    return response.data;
};

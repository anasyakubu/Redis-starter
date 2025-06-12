import axios from 'axios';

const LOGS_API_URL = `https://mnqhvcymdf.execute-api.us-east-1.amazonaws.com/dev/log`;

const fetchLogs = async () => {
  try {
    const response = await axios.get(`${LOGS_API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching logs:', error);
    throw error;
  }
};

export { fetchLogs, };
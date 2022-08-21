const devBaseURL = 'https://react-cms-api.tj520.top';
const proBaseURL = 'https://react-cms-api.tj520.top';

const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
const TIME_OUT = 5000;

export { BASE_URL, TIME_OUT };

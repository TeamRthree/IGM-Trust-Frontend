import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Laravel backend API
  headers: {
    'Content-Type': 'application/json',
  },
});


// Main donation endpoints
export const createDonation = (donationData) => API.post('/donations', donationData);
export const updateDonationPayment = (donationId, paymentData) =>
  API.patch(`/donations/${donationId}/payment`, paymentData);

export default API;

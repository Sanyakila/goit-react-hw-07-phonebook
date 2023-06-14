import axios from "axios";

axios.defaults.baseURL = 'https://648766e4beba6297279094e3.mockapi.io';

export async function fetchContacts() {
    const response = await axios.get(`/contacts`);
    return response.data;
}

export async function addContact(newContact) {
    const response = await axios.post(`/contacts`, newContact);
    return response.data;
}

export async function deleteContact(contactId) {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
}
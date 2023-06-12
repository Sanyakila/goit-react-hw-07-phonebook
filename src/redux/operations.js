import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'services/api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await api.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue }) => {
        try {
            const contacts = await api.addContact(newContact);
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const contacts = await api.deleteContact(contactId);
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
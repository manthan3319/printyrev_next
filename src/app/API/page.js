import { ApiUrl } from "../Cradisial/Cradisial";
import axios from 'axios';

export const getCategoryWithProduct = async () => {
    try {
        const response = await axios.post(`${ApiUrl}/printyrev/getCategoryWithProduct`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

import axios from 'axios';
import { environments } from '../environments';
import { PublicApiEntriesResponse } from '../models/PublicApiEntriesResponse';

const publicApiService = {
  getEntries: async (value?: string) => {
    const response = await axios.get<PublicApiEntriesResponse>(
      `${environments.PUBLIC_API_URL}/entries`
    );
    //console.log('--- public api service:', response?.data);
    //console.log('--- value:', value);
    if (response.status != 200) return [];
    const entries = response.data.entries || [];
    if (!value) return entries;
    const nvalue = value.toLowerCase();
    return entries.filter(e => {
      return e.API?.toLowerCase()?.includes(nvalue) || 
             e.Category?.toLowerCase()?.includes(nvalue) || 
             e.Description?.toLowerCase()?.includes(nvalue);
    });
  },
};

export { publicApiService };

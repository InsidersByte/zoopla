import { ZOOPLA_API_BASE_PATH, ZOOPLA_API_HOSTNAME, PROPERTY_LISTING_ENDPOINT } from './constants';
import httpClient from './HttpClient';

class Zoopla {
    constructor({ apiKey }) {
        this.apiKey = apiKey;
    }

    getPropertyListings(parameters) {
        return this.request({ endpoint: PROPERTY_LISTING_ENDPOINT, parameters });
    }

    getPropertyListingsById(...ids) {
        const parameters = { listing_id: ids };
        return this.request({ endpoint: PROPERTY_LISTING_ENDPOINT, parameters });
    }

    request({ endpoint, parameters }) {
        const url = `${ZOOPLA_API_HOSTNAME}${ZOOPLA_API_BASE_PATH}${endpoint}`;
        const query = {
            ...parameters,
            api_key: this.apiKey,
        };

        return httpClient.get({ url, query });
    }
}

module.exports = Zoopla;

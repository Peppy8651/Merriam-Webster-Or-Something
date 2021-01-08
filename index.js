const nodeFetch = require('node-fetch');
const Results = require('./results');
module.exports = class {
	/**
   * @param {string} [token=this.token]
   */
	constructor(token) {
		if (!token) throw new Error('You did not provide a token.');
		if (typeof token != 'string') throw new Error('Token is not string');
		this.token = token;
	}
	/**
	 * @param {string} Word
	 * @returns {Promise<Results>}
	 * @description Returns null if unable to get any results
	 */
	async get(Word) {
		const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${Word}?key=${this.token}`;
		// eslint-disable-next-line no-unused-vars
		const fetchedResults = await nodeFetch(url).then(response => response.json()).catch(e => null);
		if (fetchedResults == 'Key is required.' || fetchedResults == 'Invalid API key. Not subscribed for this reference.') throw new Error('Key is invalid or has not been added in the constructor. Add a valid key to the constructor.');
		if (!fetchedResults) return null;
		const res = new Results(fetchedResults);
		return res;
	}
};
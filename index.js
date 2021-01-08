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
	 */
	async get(Word) {
		const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${Word}?key=${this.token}`;
		// eslint-disable-next-line no-unused-vars
		const fetchedResults = await nodeFetch(url).then(response => response.json()).catch(e => null);
		if (!fetchedResults) return null;
		const res = new Results(fetchedResults);
		return res;
	}
};
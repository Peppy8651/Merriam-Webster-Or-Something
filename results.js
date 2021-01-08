module.exports = class {
	constructor(fetchedResults) {
		this.meta = {
			/** @type {String}*/
			id: fetchedResults.meta.id || undefined,
			/** @type {String} */
			uuid: fetchedResults.meta.uuid || undefined,
			/** @type {String} */
			sort: fetchedResults.meta.sort || undefined,
			/** @type {String} */
			src: fetchedResults.meta.src || undefined,
			/** @type {String} */
			section: fetchedResults.meta.section || undefined,
			/** @type {String[]} */
			stems: fetchedResults.meta.stems || undefined,
			/** @type {Boolean} */
			offensive: fetchedResults.meta.offensive || null,
		} || null;
		/** @type {Number} */
		this.hom = fetchedResults.hom || undefined;
		this.hwi = {
			/** @type {string} */
			hw: fetchedResults.hwi.hw || undefined,
			/**
			 * @type {pr[]}
			*/
			prs:  fetchedResults.hwi.prs || undefined,
		};
		/**
		 * @type {ahws[]}
		 */
		this.ahws = fetchedResults.ahws;
		/** @type {vr[]} */
		this.vrs = fetchedResults.vrs;
		/** @type {String} */
		this.fl = fetchedResults.fl;
	}
};

// eslint-disable-next-line no-unused-vars
class ahws {
	constructor() {
		this.hw = new String();
		/** @type {pr[]} */
		this.prs = [];
		this.psl;
	}
}
// eslint-disable-next-line no-unused-vars
class pr {
	constructor() {
		this.mw = new String();
		this.sound = {
			audio: new String(),
			ref: new String(),
			stat: new String(),
		};
	}
}
// eslint-disable-next-line no-unused-vars
class vr {
	constructor() {
		this.va = new String();
		this.vl = new String();
		/** @type {pr[]} */
		this.prs = [];
		this.spl;
	}
}
module.exports = class Results {
	constructor(fetchedResults) {
		/**
		 * @type {Word[]}
		 * @description Entry in items Array may be undefined or null.
		*/
		this.items = fetchedResults;
	}
};
// eslint-disable-next-line no-unused-vars
class Word {
	constructor() {
		this.meta = {
			/** @type {String}*/
			id: undefined,
			/** @type {String} */
			uuid: undefined,
			/** @type {String} */
			sort: undefined,
			/** @type {String} */
			src: undefined,
			/** @type {String} */
			section: undefined,
			/** @type {String[]} */
			stems: undefined,
			/** @type {Boolean} */
			offensive: undefined,
		} || null;
		/** @type {Number} */
		this.hom = undefined;
		this.hwi = {
			/** @type {string} */
			hw: undefined,
			/**
			 * @type {pr[]}
			*/
			prs:  undefined,
		};
		/**
		 * @type {ahws[]}
		 */
		this.ahws = undefined;
		/** @type {vr[]} */
		this.vrs = undefined;
		/** @type {String} */
		this.fl = undefined;
	}
}
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
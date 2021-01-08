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
		/** @type {inflection[]} */
		this.ins = [];
		/** @type {String[]} */
		this.sls = [];
		/** @type {cx[]} */
		this.cxs = [];
		/** @type {} */
		this.dros = [];
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
			prs: undefined,
			/** @type {String} */
			psl: undefined,
		};
		/**
		 * @type {ahws[]}
		 */
		this.ahws = undefined;
		/** @type {vr[]} */
		this.vrs = undefined;
		/** @type {String} */
		this.fl = undefined;
		/** @type {def[]} */
		this.def = [];
	}
}
// eslint-disable-next-line no-unused-vars
class ahws {
	constructor() {
		this.hw = new String();
		/** @type {pr[]} */
		this.prs = [];
		/** @type {String} */
		this.psl = undefined;
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
	}
}

// eslint-disable-next-line no-unused-vars
class inflection {
	constructor() {
		/** @type {String} */
		this.if = undefined;
		/** @type {String} */
		this.ifc = undefined;
		/** @type {String} */
		this.il = undefined;
		/** @type {pr[]} */
		this.prs = [];
		/** @type {String} */
		this.spl = undefined;
	}
}

// eslint-disable-next-line no-unused-vars
class cx {
	constructor() {
		/** @type {cxti[]} */
		this.cxtis = [];
		/** @type {String} */
		this.cxl = undefined;
	}
}
// eslint-disable-next-line no-unused-vars
class cxti {
	constructor() {
		/** @type {String} */
		this.cxl = undefined;
		/** @type {String} */
		this.cxr = undefined;
		/** @type {String} */
		this.cxt = undefined;
		/** @type {String} */
		this.cxn = undefined;
	}
}

// eslint-disable-next-line no-unused-vars
class def {
	constructor() {
		/** @type {String} */
		this.vd = undefined;
		/** @type {sense[]} */
		this.sseq = [];
	}
}
// eslint-disable-next-line no-unused-vars
class sense {
	constructor() {
		/** @type {String[]} */
		this.dt = [];
		this.et = undefined;
		/** @type {inflection[]} */
		this.ins = [];
		/** @type {String[]} */
		this.lbs = [];
		/** @type {pr[]} */
		this.prs = [];
		/** @type {sdsense[]} */
		this.sdsense = [];
		/** @type {String} */
		this.sgram = undefined;
		/** @type {String[]} */
		this.sls = [];
		/** @type {String} */
		this.sn = undefined;
		/** @type {vr[]} */
		this.vrs = [];
	}
}
// eslint-disable-next-line no-unused-vars
class sdsense {
	constructor() {
		/** @type {String} */
		this.sd = undefined;
		/** @type {String[]} */
		this.et = [];
		/** @type {inflection[]} */
		this.ins = [];
		/** @type {String[]} */
		this.lbs = [];
		/** @type {pr[]} */
		this.prs = [];
		/** @type {String} */
		this.sgram = undefined;
		/** @type {String[]} */
		this.sls = [];
		/** @type {vr[]} */
		this.vrs = [];
		/** @type {String[]} */
		this.dt = [];
	}
}

// eslint-disable-next-line no-unused-vars
class aq {
	constructor() {
		/** @type {String} */
		this.auth = undefined;
		/** @type {String} */
		this.source = undefined;
		/** @type {String} */
		this.aqdate = undefined;
		/** @type {subsource} */
		this.subsource = null;
	}
}
// eslint-disable-next-line no-unused-vars
class subsource {
	constructor() {
		/** @type {String} */
		this.source = undefined;
		/** @type {String} */
		this.aqdate = undefined;
	}
}

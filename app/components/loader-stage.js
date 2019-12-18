import Component from '@ember/component';

export default Component.extend({
	goFetchData: false,

	actions: {
		kickoffDataFetch(pref) {
			this.goFetchData = pref;
		}
	}
});

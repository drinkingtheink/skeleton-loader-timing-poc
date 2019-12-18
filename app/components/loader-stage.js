import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
	goFetchData: false,

	goFetchDataChanged: observer('goFetchData', function() {
		if(this.goFetchData) {
			setTimeout(() => { this.endDataFetch(); }, 500);
		}
	}),

	endDataFetch() {
		this.set('goFetchData', false);
	},

	actions: {
		kickoffDataFetch() {
			this.set('goFetchData', true);
		}
	}
});

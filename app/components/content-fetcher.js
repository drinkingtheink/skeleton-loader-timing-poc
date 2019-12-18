import Component from '@ember/component';

export default Component.extend({
	timeoutDur: 2,
	timeoutId: null,
	fetching: false,
	goFetchData: false,

	willRender() {
		if(this.goFetchData) {
			this.fakeFetchData();
		}
	},

	fakeFetchData() {
		this.set('fetching', true);
		
		setTimeout(() => { 
			this.set('fetching', true); 
		}, this.timeoutDur);
	},

	clearFetchData() {
		window.clearTimeout(this.timeoutId);
	},

	actions: {
		updateTimeoutDur(e) {
			this.set('timeoutDur', e.target.value);
		}
	}
});

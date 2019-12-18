import Component from '@ember/component';

export default Component.extend({
	timeoutDur: 2000,
	timeoutId: null,
	fetching: false,

	willRender() {
		if(this.goFetchData) {
			this.fakeFetchData();
		}
	},

	fakeFetchData() {
		this.set('fetching', true);
		
		let timer = setTimeout(() => { 
			this.set('fetching', false); 
			console.log(`FETCHING DATA AFTER ${this.timeoutDur}ms ++++++++++++++++++++++++`);
		}, this.timeoutDur);

		this.set('timeoutId', timer);
	},

	clearFetchData() {
		window.clearTimeout(this.timeoutId);
	},

	actions: {
		updateTimeoutDur(e) {
			this.set('timeoutDur', e.target.value);
		}
	},

	didReceiveAttrs() {
		this._super(...arguments);
		
		if(this.goFetchData) {
			this.fakeFetchData();
		} 
	}
});

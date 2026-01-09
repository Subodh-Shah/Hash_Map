class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = Array(capacity);
		this.entryCount = 0;
	}
	
	hash(key){
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++){
			hashCode = (hashCode*primeNumber + key.charCodeAt(i));
		}
		return Math.abs(hashCode % this.capacity);
	}
	
		
	set(key, value) {
		let hashCode = this.hash(key);
		if(!this.buckets[hashCode]){
			this.buckets[hashCode] = [];
		}
		
		let entry = this.buckets[hashCode].find(item => item[0] === key);
		if(entry) {
			entry[1] = value;
		} else {
			this.buckets[hashCode].push([key, value]);
		}
	}
	
	get(key) {
		let hashCode = this.hash(key);
		let entry =  this.buckets[hashCode].find(item => item[0] === key);
		if(entry) {
			return entry[1];
		}
		return undefined;
	}
	
	remove(key) {
		let hashCode = this.hash(key);
		let bucket = this.buckets[hashCode];
		if(!bucket) return false;
		let entryIndex = bucket.findIndex(item => item[0] === key);
		if(entryIndex !== -1) {
			bucket.splice(entryIndex, 1);
			return true;
		}
		return false;
	}
	
	
	has(key){
		let hashCode = this.hash(key);
		let bucket =  this.buckets[hashCode];
		if (!bucket) return false;
		let entry = bucket.find(item => item[0] ===key);
		if (entry) {
			return true;
		}
		return false;
	}
	
	keys(){
		let keysArray = [];
		for (let bucket of this.buckets) {
			if (!bucket) continue;
			
			for (let entry of bucket){
				keysArray.push(entry[0]);
			}
		}
		return keysArray;
	}
	
	values() {
		let valuesArray = [];
		for (let bucket of this.buckets) {
			if (!bucket) continue;
			for (let entry of bucket) {
				valuesArray.push(entry[1]);
			}
		}
		return valuesArray;
	}
	
	entries () {
		let entriesArray = [];
		for (let bucket of this.buckets) {
			if(!bucket) continue;
			for (let entry of bucket) {
				entriesArray.push([entry[0], entry[1]]);
			}
		}
		return entriesArray;
	}
	
	hashes() {
		let hashesArray = [];
		for (let bucket of this.buckets) {
			if(!bucket) continue;
			for (let entry of bucket) {
				hashesArray.push(this.hash(entry[0]));
			}
		}
		return hashesArray;
	}
	
	size () {
		let counter = 0;
		for (let bucket of this.buckets) {
			if(!bucket) continue;
			 counter = counter + bucket.length;
		}
		return counter;
	}
	

	clear() {
		this.buckets = Array(this.capacity);
	}
}

function mainFunction()  {
	let newHashMap = new HashMap();
	console.log("This is working properly");
	newHashMap.set('Subodh Shah', 20 );
	newHashMap.set('Denish Chaudhary', 22 );
	newHashMap.set('Mahadev Bhatta', 22 );
	console.log(newHashMap.buckets);
	
	let keys = newHashMap.keys();
	console.log(keys);
	console.log(newHashMap.hashes());
}

mainFunction();
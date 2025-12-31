class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = Array(capacity);
	}
	
	hash(key){
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length(); i++){
			hashCode = (hashCode*primeNumber + key.charCodeAt(i)) % this.capacity;
		}
		return hashCode;
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
			this.buckets[hashCode] = [key, value];
		}
	}
	
	get(key) {
		let hashCode = this.hash(key);
		let entry =  this.buckets[hashCode].find(item => item[0] === key)
		if(entry) {
			return this.buckets[hashCode][1];
		}
		return undefined;
	}
	
	remove(key) {
		let hashCode = this.hash(key);
		if(this.buckets[hashCode].includes([key, value])) 
		{
			this.buckets.splice(hashCode, 1);
			return true;
		}
		return false;
	}
	
	has(key){
		let hashCode = hash(key);
		if (this.buckets.contains(hashCode)) {
			return true;
		}
		return false;
	}
	
	keys(){
		let keysArray = [];
		for (let entry in this.buckets) {
			keysArray.push(entry[0]);
		}
		return keysArray;
	}
	
	values() {
		let valuesArray = [];
		for (let entry in this.buckets) {
			valuesArray.push(entry[1]);
		}
		return valuesArray;
	}
	
	entries () {
		let entriesArray = [];
		for (let entry in this.buckets) {
			entriesArray.push([entry[0], entry[1]]);
		}
		return entriesArray;
	}
	
	size () {
		const counter = 0;
		for (let entry in this.buckets) {
			counter++;
		}
		return counter;
	}
	
	clear() {
		for (let entry in this.buckets) {
			let hashCode = this.hash(entry[0]);
			this.buckets[hashCode] = [];
		}
	}
}

function mainFunction()  {
	let newHashMap = new HashMap();
	console.log("This is working properly");
	newHashMap.set();
	newHashMap.set();
	newHashMap.set();
	console.log(newHashMap.hashMap);
	
	let keys = newHashMap.keys();
	console.log(keys);
}

mainFunction();
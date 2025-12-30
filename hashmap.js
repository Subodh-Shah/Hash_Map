// Module containing Hash map class

class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = Array(capacity);
	}
	
	hash(key){
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < k.length(); i++){
			hashCode = (hashCode*primeNumber + key.charCodeAt(i)) % this.size();
		}
		return hashCode;
	}
	
		
	set(key, value) {
		let hashCode = this.hash(key);
		if(!this.buckets[hashCode]){}
	}
	
	get(key) {
		let hashCode = this.hash(key);
		return this.buckets[hashCode];
	}
	
	remove(key) {
		let hashCode = hash(key);
		if(this.buckets.includes(key)) 
		{
			this.buckets.remove(hashCode);
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
		for (let key in this.hashMap) {
			keysArray.push(key);
		}
		return keysArray;
	}
	
	values() {
		let valuesArray = [];
		for (let key in this.hashMap) {
			valuesArray.push(this.hashMap[keys]);
		}
		return valuesArray;
	}
	
	entries () {
		let entriesArray = [];
		for (let key in this.hashMap) {
			entriesArray.push([key, this.hashMap[key]]);
		}
		return entriesArray;
	}
	
	size () {
		const counter = 0;
		for (let key in this.hashMap) {
			counter++;
		}
		return counter;
	}
	
	clear() {}
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
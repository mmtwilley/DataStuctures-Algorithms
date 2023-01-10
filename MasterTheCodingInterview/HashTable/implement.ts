class HashTable{
    data: Array<any>

    constructor(size:number){
        this.data = new Array(size);
    }


    // O(1)
    private _hash(key: any){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i)
            %this.data.length
        }
        return hash;

    }
    //O(1)
    set(key:any, value:any){
        let keyValuePair = [key,value]
        let hashKeyIndex = this._hash(key);
        if(!this.data[hashKeyIndex]){
            this.data[hashKeyIndex] = [];
            this.data[hashKeyIndex].push([key,value]);
        }
        this.data[hashKeyIndex].push([key, value]);
    }

    //0)(1) to 0(N)
    get(key:any){
        //let hashKeyIndex = this._hash(key);
        //return this.data[hashKeyIndex[1]]
        let hashKeyIndex = this._hash(key);
        const currentBucket = this.data[hashKeyIndex];
        if(currentBucket){
            for(let i = 0; i< currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    key(){
        if(!this.data.length){
            return undefined;
        }

        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) { // loop through all the elements
            if(this.data[i] && this.data[i].length){ // checks to see if it's not an empty memory cell
                if(this.data.length > 1){ // loops through all potenial collisions
                    for (let j =0; j<this.data[i].length;j++){
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    keysArray.push(this.data[i][0]);
                }

            }
        }
        return keysArray;
    }

}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get("grapes"))

//Hash Functions are idempotent - alway generate the same output
//Meaning that it's one way, it goes from input to output. Never output to input.
//The hash stores a memory address
// The time of hash function  is O(1)
//Hash functions randomly assigns thing randomly in memory


//Hash Table
/**
 * insert - O(1)
 * lookup - O(1)
 * delete-0(1)
 * search O(1)
 *
 */



let user = {
    age:54,
    name:'Kylie',
    magic:true,
    scream (){
        console.log('aaaaaHHHH!')
    },
    spell:""
}

// The properties are at different locations

user.age //O(1)
user.spell = "abra kadabra" //0(1)
user.scream(); //0(1)



/**
 * Hash COllisions - is O(n)
 *
 * Is when data share the same memory space
 *
 * Two Ways to deal with them - One of them is Linked List
 */

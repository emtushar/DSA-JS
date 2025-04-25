function towerOfHanoi(n,s,m,d){
if(n === 1){
    console.log(`Move Disk ${n} from ${s} to ${d}`)
    return
}
towerOfHanoi(n-1,s,d,m)
console.log(`Move disk ${n} from ${s} to ${d}`)
towerOfHanoi(n-1,m,s,d)


}
console.log(towerOfHanoi(3,'A','B','C'))

// Big-O Complexity
// Object(2^n)
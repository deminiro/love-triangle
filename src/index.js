/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation 
  let count = 0; 
   
   if(preferences[0]+1==preferences[1] && preferences[1]-2==preferences[2] && preferences[2]-2==preferences[0]){
    for(let i=0;i<getLoveTrianglesCount;i++){
    return count++ && preferences.splice(0,3);
    } }
   else{
     return preferences.splice(0,3);
   }return count;
   }

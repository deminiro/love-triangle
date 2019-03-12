/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation 
  let count = 0; 
  
   if(preferences[0]+1===preferences[1] && preferences[1]-2===preferences[2] && preferences[2]-2===preferences[0]){
      for(let count;count<=preferences.length;count++){
      return preferences.splice(0,3) && ++count;
    }
   }
   return count;
  }

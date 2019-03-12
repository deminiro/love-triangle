/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0; 
  function preferences(b,c,a){  
         if( b = a + 1,
             c = b + 1,
             a = c - 2,
             c.indexOf = b.indexOf + 1,
             a.indexOf = c.indexOf + 1,
             b.indexOf = a.indexOf - 2){
             return count++;
}
  else{ 
  return undefined;
  };
};
  return count;
};

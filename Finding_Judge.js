/* in  this code, we are trying to find who is the town judge in a N array 
that is passed as parameter*/

function findJudge(N, trust) {
  let givedLikes = {};
  
  let receivedLikes = {};
  
  for(let i = 1; i <= N; i++) {
   givedLikes[i] = 0;
   receivedLikes[i] = 0;
  }
  
  for(let element of trust) {
    givedLikes[element[0]] += 1;
    receivedLikes[element[1]] += 1;
  }
  
  let judge = 0;
  
  for(likes in givedLikes) {
    if(givedLikes[likes] === 0) {
      judge = likes
    }
  }
  
  if(receivedLikes[judge] === N - 1) {
    return judge
  } else {
    return -1
  }
}




function distanceFromHqInBlocks(pickUp) {
    const street = 42;
    
    let result = Math.abs(pickUp - street);
    return result;
    
}
//let value = distanceFromHqInBlocks(50)
//console.log(value)
  function distanceFromHqInFeet(pickUp) {

    const feetLong = 264;
    let blocks = distanceFromHqInBlocks(pickUp);
      
    return blocks * feetLong;
    
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264) ;
    
  }
  
  function calculatesFarePrice(start, destination) {
   let distTravel = distanceTravelledInFeet(start, destination)

   if(distTravel <= 400){
      return 0;
   }
   else if ( distTravel >= 400 && distTravel <= 2000){
      return 2.56;

   }
   else if (distTravel >= 2500){
    return 'cannot travel that far';
   }
   else if (distTravel > 2000 && distTravel <= 2500 ){
    return 25;
   }
  }

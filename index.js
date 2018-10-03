class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
 
  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear();
  }

}
 
 
class Route{
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  let vertDistance = this.endingLocation.vertical - this.startingLocation.vertical;
  let horizDistance
  }
}
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
  
  blocksTravelled()
}
class Driver {
  constructor(props) {
    this.country = props.country;
    this.dob = props.dob;
    this.name = props.driverName;
    this.number = props.driverNumber;
    this.previousNumbers = props.previousNumbers || [];
    this.notes = props.notes;
    this.pob = props.placeOfBirth;
    this.primaryKey = props.primaryKey;
    this.seasonsActive = props.seasonsActive;
  }
}

module.exports = Driver;

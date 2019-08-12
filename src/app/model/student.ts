export class Student {
  id;
  name;
  dob;
  street;
  street2;
  city;
  state;
  zip;
  course;
  asOfDate;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

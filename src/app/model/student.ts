export class Student {
  id: string;
  name: string;
  dob: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  course: string;
  asOfDate: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

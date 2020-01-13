import events from './Lab_constant';

// TODO: make use of these enums to better represent the string literals in the events object
export enum EventCategories {
  News = 'news',
  Noop = 'None',
}

export enum EventTypes {
  Dividends = 'dividends',
  Splits = 'splits',
  High = 'high',
  Low = 'low',
}

// TODO: make an enum for usedIn field and use it in the events object

// TODO: can you define a type for the events constant?

// TODO: does ts notify an error when your event id and it's key in the events are different?

// TODO: can you modify the parameter type of this function to get any events display correctly
function getEventDisplay(eventType: string) {
  console.log(events[eventType].display);
  return events[eventType].display;
}

// TODO: define this function correctly so it returns the headline of an event 
function getEventHeadline(eventType: EventTypes): string {
  return events[eventType].headline;
}

// TODO: define the data type for this events object. find what props should it have and replace type any in the events constant with it.

function getDate(eventType: EventTypes): string | never {
  return events[eventType].date();
}

// does the return type of above function match with the type of your data's date property
// in what case the return type should be `never`

interface Contact {
    id: number;
    name: string;
}

function clone<T>(source: T): T {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const c = clone('bob')

const dateRange = {startDate: Date.now(),endDate: Date.now()}
const dateRangeCopy = clone(dateRange)

interface UserContact<TExternalId>{
    id: number;
    name: string;
    username: string;
    externalID: TExternalId;
}

function clone1<T1,R2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const b1 = clone1<Contact,UserContact>(a)

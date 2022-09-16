interface Contact {
    id: number;
    name: string;
    clone(name:String): Contact
}

// function clone(source: Contact, func: (source: Contact) => Contact):Contact {
function clone(source: Contact):Contact {
    return Object.apply({}, source);
}

const a: Contact = {id: 123, name: "Homer Simpson"};
const b = clone(a)
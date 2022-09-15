interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date; // ? = optional
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}
let primaryContact: Contact = {
    // birthDate: new Date("01-01-2000"),
    id: 12345,
    name: "Jamie Johnson",
    postalCode: "1234"
}

let secondContact: Contact = {
    birthDate: new Date("01-01-2000"),
    id: 12345,
    name: "Jamie Johnson"
}
interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(target: any, property: string, descriptor: PropertyDescriptor) {
    // descriptor.value = function () {

    // }

    // return {
    //     // ... make any changes here
    // } as PropertyDescriptor

    const wrapped = descriptor.value

    descriptor.value = function () {
        if(!currentUser.isAuthenticated()) {
            throw Error("User is not AUthenticated");
        }

        try {
            return wrapped.apply(this, arguments)
        } catch(ex) {
            // TODO: logging logic here
            throw ex;
        }
    }


}

class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        if (!currentUser.isInRole("ContactViewer")) {
            throw Error("User not authorized to execute this action");
        }

        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize("ContactEditor")
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}
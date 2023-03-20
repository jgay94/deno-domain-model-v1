import { ContactConstructorParams } from "@contact/typings.d.ts";

export class Contact {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public accountId?: string;

  constructor(params: ContactConstructorParams) {
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.email = params.email;
    this.phone = params.phone;
    this.accountId = params.accountId;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

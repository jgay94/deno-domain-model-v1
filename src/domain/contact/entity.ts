import { Id, Identifiable } from "@infrastructure/storage/mod.ts";

import { ContactConstructorParams } from "@domain/contact/typings.d.ts";

export class Contact implements Identifiable {
  public readonly id: Id;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public isPrimary: boolean;
  public accountId?: string;

  constructor({
    id,
    firstName,
    lastName,
    email,
    phone,
    isPrimary,
    accountId,
  }: ContactConstructorParams) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.isPrimary = isPrimary;
    this.accountId = accountId;
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public set fullName(value: string) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

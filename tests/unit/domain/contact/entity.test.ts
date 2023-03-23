import { describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { Contact } from "@domain/contact/mod.ts";

describe("Contact Entity", () => {
  it("should create a Contact with correct properties", () => {
    const contact = new Contact({
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    });

    assertEquals(contact.fullName, "John Doe");
    assertEquals(contact.email, "john@example.com");
    assertEquals(contact.phone, "123-456-7890");
  });

  it("should update a Contact with correct properties", () => {
    const contact = new Contact({
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    });
  
    contact.email = "jane@example.com";
    contact.phone = "321-654-0987";
    contact.accountId = "2";
  
    assertEquals(contact.email, "jane@example.com");
    assertEquals(contact.phone, "321-654-0987");
    assertEquals(contact.accountId, "2");
  });  

  it("should get and set a Contact's fullName correctly", () => {
    const contact = new Contact({
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    });
  
    assertEquals(contact.fullName, "John Doe");
  
    contact.fullName = "Jane Smith";
    assertEquals(contact.firstName, "Jane");
    assertEquals(contact.lastName, "Smith");
  });
});

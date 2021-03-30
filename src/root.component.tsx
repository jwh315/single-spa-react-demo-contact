import React, { useState } from "react";

// @ts-ignore
import { IRootProps, IContact } from "@cd/models";

export default function Root(props: IRootProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createNewContact = () => {
    const newContact = {
      name,
      email,
      phone,
    } as IContact;

    props.eventer.publish("CONTACT_ADDED", newContact);

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <section>
      <div className="box-border shadow-lg h-full border border-black bg-white text-black w-full p-6">
        <span className="text-3xl">Add Contact</span>
        <form action="" className="min-w-full space-y-6 py-4">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="tel"
              className="mt-1 block w-full"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label className="block flex justify-center">
            <input
              type="button"
              className="bg-primary m-2 px-8 py-4 rounded-md text-white"
              value="add"
              onClick={createNewContact}
            />
          </label>
        </form>
      </div>
    </section>
  );
}

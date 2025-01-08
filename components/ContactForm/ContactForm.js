import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import { Input, Textarea } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <div className="p-[32px] sm:p-[64px] col-span-2">
      <form>
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              First name
            </label>
            <div class="mt-2.5">
              <Input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)]"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              Last name
            </label>
            <div class="mt-2.5">
              <Input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)]"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="company"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              Company
            </label>
            <div class="mt-2.5">
              <Input
                type="text"
                name="company"
                id="company"
                autocomplete="organization"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)]"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              Email
            </label>
            <div class="mt-2.5">
              <Input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)]"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              Phone number
            </label>
            <div class="mt-2.5">
              <div class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[var(--P3)]">
                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country"
                    aria-label="Country"
                    class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)] sm:text-sm/6"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>AU</option>
                  </select>
                  <ChevronDownIcon
                    class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  />
                </div>
                <Input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  placeholder="123-456-7890"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm/6 font-semibold text-[var(--S0)] text-left"
            >
              Message
            </label>
            <div class="mt-2.5">
              <Textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--P3)]"
              ></Textarea>
            </div>
          </div>
          <div class="mt-10 sm:col-span-2">
            <ActionButton label="Sumbit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

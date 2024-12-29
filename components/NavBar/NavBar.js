"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./NavBar.module.css";
import ActionButton from "@/components/ActionButton/ActionButton";

import logo from "@/assets/logo.svg";

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-[20px]"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Express Form</span>
            <Image src={logo} width={141} height={32} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-3">
          <a href="/" className={styles.navbarItem}>
            Home
          </a>
          <a href="/caravan" className={styles.navbarItem}>
            Caravan Tops
          </a>
          <a href="/home" className={styles.navbarItem}>
            Home Tops
          </a>
          <a href="/about" className={styles.navbarItem}>
            About Us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ActionButton label="Contact Us" link="/contact" />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Express Form</span>
              <Image src={logo} width={141} height={32} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/caravan"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  Caravan Tops
                </a>
                <a
                  href="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  Home Tops
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
              </div>
              <div className="py-6">
                <ActionButton label="Contact Us" link="/contact" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavBar;

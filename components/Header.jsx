'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Hakkımda', href: 'hakkimda' },
  { name: 'Hizmetlerim', href: 'hizmetlerim' },
  { name: 'Portfolyo', href: 'portfolyo' },
  { name: 'Yorumlar', href: 'yorumlar' },
  { name: 'Bana Ulaşın', href: 'bana-ulasin' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (pathName === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathName]);

  return (
    <header
      className={`inset-x-0 top-0 z-50 ${
        !isHomePage ? 'block bg-primary' : 'absolute'
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8  max-w-[1440px] mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image
              className="h-12 w-auto -m-1.5 p-1.5 cursor-pointer"
              src={isHomePage ? '/logo.png' : '/logoblack.png'}
              alt="deniz weber çeviri website logo"
              width={400}
              height={400}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-6 w-6 ${
                isHomePage ? 'text-gray-200' : 'text-gray-800'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                isHomePage ? 'text-white' : 'text-gray-900'
              } cursor-pointer`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                className="h-10 w-auto -m-1.5 p-1.5"
                src="/logoblack.png"
                alt="deniz weber çeviri logo"
                width={300}
                height={300}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

import { lato } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  HashtagIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './../ui/button';
import Link from 'next/link';

export default async function Page() {
  return (
    <form className="m-auto w-6/12 space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-2 pt-4">
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
              />
              <FaceSmileIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="row flex flex-row">
            <div className="mt-1 w-1/2">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[6px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  minLength={6}
                />
                <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-1 w-1/2">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[6px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  minLength={6}
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="comment"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="comment"
                name="comment"
                placeholder="Message"
                required
              />
            </div>
          </div>

        </div>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        <SendButton />
      </div>
    </form>
  );
}

function SendButton() {
  return (
    <Button className="mx-auto mt-2 w-2/4 bg-green-800">
      Send <ArrowRightIcon className=" h-5 w-5 text-gray-50" />
    </Button>
  );
}

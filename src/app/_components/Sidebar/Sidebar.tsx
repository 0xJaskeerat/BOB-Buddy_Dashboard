'use client'
import React from 'react'
import { FileClock, Home, LayoutGrid, LogOut, Settings, WalletCards } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { useClerk, useUser } from '@clerk/nextjs';

const menuList = [
  {
    name: 'Home',
    icon: Home,
    path: '/'
  }, {
    name: 'Dashboard',
    icon: LayoutGrid,
    path: '/dashboard'
  }, {
    name: 'History',
    icon: FileClock,
    path: '/dashboard/History'
  },
  {
    name: 'Setting',
    icon: Settings,
    path: '/dashboard/setting'
  }
]

function sidebar() {
  const path = usePathname();
  const { user } = useUser()
  const { signOut } = useClerk();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 overflow-hidden flex items-center justify-center rounded-full border-2 border-gray-300">
            <div className="relative w-full h-full">
              <Image
                src={user?.imageUrl || "/profile.jpg"}
                alt="User's profile picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />

            </div>
          </div>
          <div className="">
            <h1 className=" text-base font-semibold">Mr. {user?.fullName}</h1>
            <p className='text-xs text-slate-500'>welcome back</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr />
      </div>

      <div className="flex-1 px-5 mt-10">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-secondary hover:text-primary rounded-full cursor-pointer ${path === menu.path && 'bg-secondary text-primary'}`}>
              <div>
                <menu.icon />
              </div>
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="px-5 my-10">
        <div className=" flex justify-center items-center">
          <div className="w-24 h-24 mt-4">
            <Image
              src="/bob-logo.png"  // Make sure the image is in the 'public' folder
              alt="Bank of Baroda Logo"
              width={150}  // Adjust the width as needed
              height={50}  // Adjust the height as needed
              layout="intrinsic"  // You can use "intrinsic", "fixed", "responsive", or "fill"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-2 p-3 hover:bg-secondary hover:text-primary rounded-full cursor-pointer">
          <div>
            <LogOut />
          </div>
          <button onClick={() => signOut({ redirectUrl: '/dashboard' })}>
            Sign out
          </button>
        </div>
      </div>
    </div>

  )
}

export default sidebar
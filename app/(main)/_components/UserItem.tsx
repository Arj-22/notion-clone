"use client"

import { ChevronsLeftRight } from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { useUser } from '@clerk/clerk-react'

const UserItem = () => {
    const { user } = useUser(); 
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div role='button' className='flex items-center text-sm p-3 w-full'>

            </div>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserItem
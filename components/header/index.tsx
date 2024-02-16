import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Icon from "../icon"

export default function Header() {
  return (
    <header className="bg-white py-4 px-9 shadow-md flex gap-6 items-center">
      <Input className="bg-white border-slate-300" placeholder="Search for anyhing..." />
      <div className="flex gap-3 items-center">
        <Icon name="messages" className="text-2xl text-gray-800" />
        <Icon name="bell" className="text-2xl text-gray-800" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

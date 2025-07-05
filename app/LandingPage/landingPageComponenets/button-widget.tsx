import Link  from "next/link"

import { Button } from "@/components/ui/button"

export function LinkAsButton() {
  return (
    <Button asChild className="bg-green-400 dark:bg-green-400 sm:w-[20px] sm:h-[20px] 
                        md:w-[250px] md:h-[50px] 
                        lg:w-[300px] lg:h-[50px]">
      <Link href="/explore">Explore</Link>
    </Button>
  )
}
export function LinkAsButton1() {
  return (
    <Button asChild className="bg-blue-500 dark:bg-blue-500  sm:w-[20px] sm:h-[20px] 
                        md:w-[250px] md:h-[50px] 
                        lg:w-[300px] lg:h-[50px]">
      <Link href="/login">Login</Link>
    </Button>
  )
}
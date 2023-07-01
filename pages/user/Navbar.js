import React from 'react'
import Link from 'next/link';
function Navbar() {
  return (
<>
<div class="mx-auto  bg-gray-200 flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 sticky top-0">
  <div class="inline-flex items-center space-x-2">

    <span class="font-bold text-white">i-meet</span>
  </div>
  <div class="hidden lg:block">
    <ul class="inline-flex space-x-8">
      <li>
      <Link href="/"  class="text-sm font-semibold text-white hover:text-white-50"> Home</Link>
      </li>
      <li>

    <Link href="/about"  class="text-sm font-semibold text-white hover:text-white-50"> About</Link>
      </li>
      <li>
      <Link href="/contact"  class="text-sm font-semibold text-white hover:text-white-50"> Contact Us</Link>
      </li>
    </ul>
  </div>
  <div class="hidden lg:block">
  <a class="px-5 py-1    cursor-pointer   hover:rounded-md   text-white text-black border-2 border-white   transition-all duration-300" href="/boucher">Join Us  </a>
  </div>
  <div class="lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-6 w-6 cursor-pointer"
    >
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  </div>
</div>
</>
  )
}

export default Navbar
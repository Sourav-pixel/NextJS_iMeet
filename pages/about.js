import React from 'react'
import Navbar from './user/Navbar'
import Footer from './user/Footer'
function about() {
  return (
 <>
<div class="relative w-full bg-gray-200">
 
 <Navbar />
 <div>
  
  <div class="mx-auto max-w-7xl px-4">
    <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
        <p class="text-xs font-semibold leading-normal md:text-sm">
          About the company
        </p>
      </div>
      <p class="text-3xl font-bold text-white md:text-5xl md:leading-10">
        Made with love, right here in Mathura
      </p>
      <p class="max-w-4xl text-base text-white md:text-xl">
      Warm Greeting to you! from iMeet team members , iMeet is one of the best opportunity for you to grow up your skills , knowledge and you will also got some experience for further jobs .If you are a technical student , then iMeet is best for you. You wil also get certified after the completion of this course.
      </p>
    </div>
    <div class="w-full space-y-4">
      <img
        class="h-[200px] w-full rounded-xl object-cover md:h-full"
        src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
        alt=""
      />
    </div>
  
    <hr class="mt-20" />
    <div class="mt-16 flex items-center">
      <div class="space-y-6 md:w-3/4">
        <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p class="text-xs font-semibold leading-normal md:text-sm">
            Join Us →
          </p>
        </div>
        <p class="text-3xl font-bold text-white md:text-4xl">
          Meet our team
        </p>
        <p class="max-w-4xl text-base text-white md:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div></div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">

  
     
 
      <div class="rounded-md border">
        <img
          src="/ksir.webp "
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-white">
         Krishna
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-white">
         Bakend Developer
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="/gsir.webp "
          alt="Deepika Ramesh"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-white">
          Gaurav Kumar
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-white">
      Mobile Developer
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="/ssir.webp "
          alt="Jordi Santiago"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-white">
          Sagar Chaudary
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-white">
         Java developer
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="/git.webp"
          alt="Kerim Fahri"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-white">
        Divya Sengar
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-white">
         Web Developer
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
      <div class="space-y-6">
        <p class="text-sm font-semibold md:text-base">Join our team →</p>
        <p class="text-3xl font-bold md:text-4xl text-white">
   Our Mission
        </p>
        <p class="text-base text-white md:text-lg">
        Our Mission is to create a world where Guaranteed websites are accessible to all.

To get a job, you need experience. But to gain experience, you need a job.
        </p>
        <button
          type="button"
          class="rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Join Now
        </button>
      </div>
      <div class="md:mt-o mt-10 w-full">
        <img
          src=" /poster.webp"
          alt="Getting Started"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
  <hr class="mt-6" />
  <div class="mx-auto max-w-7xl">
<Footer />
  </div>
</div>


 </div>
 
 </>
  )
}

export default about
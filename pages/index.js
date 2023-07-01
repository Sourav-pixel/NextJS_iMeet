

import Navbar from "./user/Navbar"
import Footer from "./user/Footer"
const Index = () => {

  
  return (
    
  
  <>


<div class="relative w-full bg-gray-200">

<Navbar />

<section class="bg-1 e bg-gray  py-4 h-[90vh]  flex justify-center items-center flex-col"><p class=" text-9xl logo p1 text-white">iMeet</p><section class="flex flex-col"><span class=" text-base text-white sm:text-3xl font-2" >Grow Your Learning</span></section><div class="flex justify-between flex-col mt-6 space-y-6 md:space-y-0 md:flex-row gap-x-6"><a class="px-10 py-3    cursor-pointer   hover:rounded-md   text-white text-black border-2 border-white   transition-all duration-300" href="/boucher">View Boucher  </a><button class="px-10 py-3    cursor-pointer   bg-green-500   hover:rounded-md   text-white  transition-all duration-300 flex gap-2 items-center justify-center">Join
</button></div></section>

<div  class="relative flex py-5 items-center justify-center px-4"><div class="flex-grow border-t  border-gray-300 dark:border-gray-500"></div><span class=" navbar_divider__ZJ4qd selection:bg-none text-center flex-shrink mx-4 text-2xl sm:text-3xl md:text-4xl font-semibold  tracking-widest text-white">Services</span><div class="flex-grow border-t  border-white"></div></div>

{/* cards */}

<div class=" flex md:flex-row justify-evenly sm:flex-col ">

<div class="w-[300px] rounded-md border bg-white">
<img
src="/web.svg"
alt=""
class="h-[200px] w-full rounded-md object-cover"
/>
<div class="p-4">
<h1 class="text-lg font-semibold">Web Developement</h1>
<p class="mt-3 text-sm text-gray-600">
A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation.


</p>
<button
  type="button"
  class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Read
</button>
</div>
</div>

<div class="w-[300px] rounded-md border bg-white">
<img
src="/mobile.svg "
alt="Laptop"
class="h-[200px] w-full rounded-md object-cover"
/>
<div class="p-4">
<h1 class="text-lg font-semibold">Mobile Developement</h1>
<p class="mt-3 text-sm text-gray-600">
Tech will transform from something we actively use to a more seamless integrated experience that is ‘on’ all the time.
</p>
<button
  type="button"
  class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Read
</button>
</div>
</div>


<div class="w-[300px]  rounded-md border bg-white">
<img
src="/ui.svg"
alt=""
class="h-[200px] w-full rounded-md object-cover"
/>
<div class="p-4">
<h1 class="text-lg font-semibold">UI/UX Development</h1>
<p class="mt-3 text-sm text-gray-600">
UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.

</p>
<button
  type="button"
  class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  Read
</button>
</div>
</div>
</div>
<div class=" h-[578px] relative flex md:flex-row justify-around sm:flex-col">

<img class="w-[362px] h-[448px] md:left-[950px] top-[66px] absolute rounded-lg sm:left-1 " src="/krishna.webp" />
<div class="md:w-[468px] md:left-[168px] md:top-[212px] absolute  md:text-[92px]    text-amber-400 font-normal leading-10">MATHURA</div>
<div class="md:w-[364px] left-[216px] md:top-[313px] absolute text-white text-[25px] font-normal leading-10">Birth Place Of Lord Krishna</div>
</div>




<div class="h-[189px] relative flex flex-grow">

  <div class="w-[117px] h-[54px] md:w-[465px] md:h-[54px] left-0 md:left-auto right-0 top-[83px] absolute md:relative">
  </div>

  <div class="md:w-[465px] md:left-1/2 md:transform md:-translate-x-1/2 top-[35px] absolute text-center text-white text-[48px] font-normal leading-10">
    Ab To Job Pakki🎉
  </div>

  <div class="md:w-[117px] md:left-auto md:right-0 top-[83px] absolute text-center text-white text-[44px] font-normal leading-10">
    iMeet
  </div>

</div>



<div  class="relative flex py-5 items-center justify-center px-4"><div class="flex-grow border-t  border-gray-300 dark:border-gray-500"></div><span class=" navbar_divider__ZJ4qd selection:bg-none text-center flex-shrink mx-4 text-2xl sm:text-3xl md:text-4xl font-semibold  tracking-widest text-white">Benifits</span><div class="flex-grow border-t  border-white"></div></div>



<div id="default-carousel" class="relative w-full" data-carousel="slide">

<div class="relative h-56 overflow-hidden rounded-lg md:h-96">

    <div class="hidden duration-700 ease-in-out " data-carousel-item>
Learn With real world project
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
    Learn With real world project
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
    Learn With real world project
    </div>
  
    <div class="hidden duration-700 ease-in-out" data-carousel-item>
      
    </div>

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
    Learn With real world project
    </div>
</div>

<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
</div>

<button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        <span class="sr-only">Previous</span>
    </span>
</button>
<button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        <span class="sr-only">Next</span>
    </span>
</button>
</div>


<div  class="relative flex py-5 items-center justify-center px-4"><div class="flex-grow border-t  border-gray-300 dark:border-gray-500"></div><span class=" navbar_divider__ZJ4qd selection:bg-none text-center flex-shrink mx-4 text-2xl sm:text-3xl md:text-4xl font-semibold  tracking-widest text-white">Technology</span><div class="flex-grow border-t  border-white"></div></div>
</div>


<div class="flex flex-wrap bg-gray-200">
<div class="w-1/2 py-6 select-none md:w-1/5 flex justify-center items-center flex-col px-2 md:px-8">
<img  loading="lazy" width="1000" height="1000" class="object-cover w-full p-12" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
</div>
<div class="w-1/2 py-6 select-none md:w-1/5 flex justify-center items-center flex-col px-2 md:px-8">
<img alt="Mongodb"  class="object-cover w-full p-12" src="java.svg" />
</div>

<div class="w-1/2 py-6 select-none md:w-1/5 flex justify-center items-center flex-col px-2 md:px-8">
<img alt="Mongodb"  class="object-cover w-full p-12" src="python.svg" />
</div>

<div class="w-1/2 py-6 select-none md:w-1/5 flex justify-center items-center flex-col px-2 md:px-8">
<img alt="Mongodb"  class="object-cover w-full p-12" src="next.svg" />
</div>

<div class="w-1/2 py-6 select-none md:w-1/5 flex justify-center items-center flex-col px-2 md:px-8">
<img alt="Mongodb"  class="object-cover w-full p-12" src="tailwind.svg" />
</div>

</div>
<div class=" flex flex-row bg-gray-200">

<div class="flex w-full flex-col md:w-1/2 px-2 md:px-32 text-white">
<h1 class="text-2xl md:text-4xl mb-4 font-serif">Get certified to gain exciting career opportunities</h1>
<p class="font-normal md:text-base mb-4">Add the certification to your resume and open doors to new opportunities in the roles of:</p>

<div class="flex gap-4 items-center py-1 mb-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl text-green-400 text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>
<p class="font-bold text-base md:text-xl selection:bg-none">Full Stack Developer</p>
</div>

<div class="flex gap-4 items-center py-1 mb-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl text-green-400 text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>
<p class="font-bold text-base md:text-xl selection:bg-none">UI Developer</p>
</div>

<div class="flex gap-4 items-center py-1 mb-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl text-green-400 text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>
<p class="font-bold text-base md:text-xl selection:bg-none">Frontend Developer</p>
</div>

<div class="flex gap-4 items-center py-1 mb-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl text-green-400 text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>
<p class="font-bold text-base md:text-xl selection:bg-none">Software Developer</p>
</div>

<div class="flex gap-4 items-center py-1 mb-2">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl md:text-4xl text-green-400 text-gray-900" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
</svg>
<p class="font-bold text-base md:text-xl selection:bg-none">React Developer</p>
</div>

<p>and more!</p>


</div>


<div class="flex w-full  flex-col md:w-1/2  px-2 md:px-32 justify-center items-center">
<img alt="certificate"  class="object-cover w-full p-12" src="image.webp " />
</div>
</div>


<Footer />

</>
        
  

  )
}

export default Index
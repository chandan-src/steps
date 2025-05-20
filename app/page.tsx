"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

const page = () => {
  return (
    <div>
      <div>
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <div className='relative'>
        <Journey></Journey>
      </div>
      <div className='relative'>
        <Features></Features>
      </div>
      <Moment></Moment>
      <Walk></Walk>
      <Latest></Latest>
      <Testimonials></Testimonials>
      <Story></Story>
      <Footer></Footer>
    </div>
  )
}

export default page



function Moment() {
  return (
    <div className='relative w-[90%] h-[500px] rounded-md mx-auto flex justify-center items-center overflow-hidden mt-20'>
      <Image src="/images/homeback.png" alt="Moment" className='absolute object-cover z-[-1] rotate-180 opacity-40' fill />
      <div className='flex flex-col justify-center items-center gap-10 w-[70%]'>
        <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>This is your life and it's ending one moment at a time.</h1>
        <p className='text-center text-2xl font-bold'>Steppps is an app that allows you to build on the habit of 'Walking' and create health outcomes for you!</p>
        <button className='bg-green-400 text-white px-10 py-2 w-fit rounded-md'>Join us</button>
      </div>
    </div>
  )
}

function Story() {
  return (
    <div className='relative w-full'>
      <Image src="/images/homeback.png" alt="Story" className='absolute object-cover z-[-1] rotate-180 opacity-40' fill />
      <h1 className='pt-10 text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>Story</h1>
      <p className='text-center text-2xl font-bold'>step into better habits with stepps</p>
      <div className='p-20 flex flex-col md:flex-row justify-center items-center gap-10 mx-auto w-[90%] h-auto transition-all duration-700'>
        <div className='flex-1 flex justify-center items-center'>
          <Image src="/images/fit.jpg" alt="Story" className='rounded-md' width={300} height={100} />
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='w-full  md:h-[300px] bg-green-400 rounded-md flex flex-col justify-center items-center'>
            <div >
              <h1 className='p-10'>Steppps is your friendly fitness buddy, helping you move more, feel better, and make activity part of your daily rhythm. We believe small steps lead to big changes—and we are here to make every step enjoyable, sustainable, and simple.</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 pb-4'>
              <Image src="/images/appstore.png" alt="Story" className='rounded-md' width={150} height={100} />
              <Image src="/images/playstore.webp" alt="Story" className='rounded-md' width={150} height={100} />
              <Image src="/images/scanner.webp" alt="Story" className='rounded-md' width={100} height={100} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <footer className="w-full bg-[#203d44] text-white pt-12 pb-8 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center md:items-start">
        {/* Logo and tagline */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <Image src="/images/logo-21.webp" alt="Logo" width={100} height={100} />
          <p className="text-lg font-semibold">Small steps big wins</p>
          <div className="mt-2">
            <p className="font-bold">Call us</p>
            <p className="text-sm">+123-456-7890</p>
            <p className="font-bold mt-2">Email us</p>
            <p className="text-sm">info@example.com</p>
          </div>
        </div>
        {/* Useful Links */}
        <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Useful Links</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
          </ul>
        </div>
        {/* Terms & Support */}
        <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Terms & Conditions</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Accessibility</a></li>
          </ul>


        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Support & Help</h2>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:info@example.com" className="hover:text-green-400 transition-colors">info@example.com</a></li>
            <li>Phone: <a href="tel:123-456-7890" className="hover:text-green-400 transition-colors">123-456-7890</a></li>
            <li>Address: <span className="text-sm">123 Main St, Anytown, USA</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-400">&copy; {new Date().getFullYear()} Small steps big wins. All rights reserved.</div>
    </footer >
  )
}

function Testimonials() {
  const testimonials = [
    {
      image: "/images/fat.jpg",
      name: "NandGopal",
      role: "Fitness Enthusiast",
      text: "The fitness social network feature has completely transformed my workout routine. I love connecting with other fitness enthusiasts! "
    },
    {
      image: "/images/fit.jpg",
      name: "Chrisitine",
      role: "Team Leader",
      text: "The personal challenges feature has helped me set and achieve my fitness goals. Highly recommend! "
    },
    {
      image: "/images/fat.jpg",
      name: "Mohit Aryan",
      role: "Team Member",
      text: "The team challenges have been amazing for keeping me motivated. The sense of community is incredible! "
    }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <div className='relative mt-10 place-items-center'>
      <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>what our users say</h1>
      <p className='text-center text-gray-600 mb-10'>real experiences from our community</p>

      <div className='pb-30 md:pt-10  flex flex-col md:flex-row justify-center items-center gap-10 mx-auto w-[90%] h-auto transition-all duration-700'>
        {/* Image Carousel */}
        <div className='flex-1 flex justify-center items-center'>
          <div className="overflow-hidden w-[300px]" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={300}
                    className='rounded-md object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold text-center transition-opacity duration-300'>
            {testimonials[selectedIndex].text}
          </h1>
          <span className='mt-4 text-lg font-bold text-green-400 transition-opacity duration-300'>
            {testimonials[selectedIndex].name}
          </span>
          <span className='text-gray-500 transition-opacity duration-300'>
            {testimonials[selectedIndex].role}
          </span>
        </div>
      </div>
    </div>
  )
}

function Walk() {

  return (
    <div className='relative mt-20'>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>Walk Together, Bond Stronger</h1>
        <p className='w-[50%] text-center'>Group Challenges are exclusive fitness journeys designed for private groups. Whether it's your family, friends, colleagues, or a special community, these challenges bring you closer while keeping you on your toes—literally!</p>
        <div className='w-[80%] flex flex-col lg:flex-row justify-between items-center gap-4'>
          <div className='w-[350px] h-[150px] bg-[#9ae8fa] rounded-md flex gap-4 flex-col justify-center items-start p-4'>
            <h1 className='text-2xl font-bold'>By Invite Only</h1>
            <p>
              These challenges are not listed for everyone. You'll need to know the group's name or have a special code to join.
            </p>
          </div>
          <div className='w-[350px] h-[150px] bg-[#9ae8fa] rounded-md flex gap-4 flex-col justify-center items-start p-4'>
            <h1 className='text-2xl font-bold'>By Invite Only</h1>
            <p>
              These challenges are not listed for everyone. You'll need to know the group's name or have a special code to join.
            </p>
          </div>
          <div className='w-[350px] h-[150px] bg-[#9ae8fa] rounded-md flex gap-4 flex-col justify-center items-start p-4'>
            <h1 className='text-2xl font-bold'>By Invite Only</h1>
            <p>
              These challenges are not listed for everyone. You'll need to know the group's name or have a special code to join.
            </p>
          </div>
        </div>
        <button className='bg-green-400 text-white px-10 py-2 w-fit rounded-md'>Start Tracking</button>
      </div>

    </div>
  )
}

function Features() {
  const challenges = [
    {
      title: "Personal Challenges",
      description: "Set and track your personal fitness goals",
      image: "/images/feature1.png",
      info: "Create custom challenges and track your progress"
    },
    {
      title: "Team Challenges",
      description: "Compete with friends and colleagues",
      image: "/images/feature2.png",
      info: "Join team challenges and stay motivated together"
    },
    {
      title: "Social Network",
      description: "Connect with fitness enthusiasts",
      image: "/images/feature3.png",
      info: "Share your progress and inspire others"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your fitness journey",
      image: "/images/feature4.png",
      info: "Track steps, distance, and achievements"
    },
    {
      title: "Rewards System",
      description: "Earn rewards for your achievements",
      image: "/images/feature5.png",
      info: "Get rewarded for reaching your goals"
    },
    {
      title: "Custom Goals",
      description: "Set personalized fitness targets",
      image: "/images/feature6.png",
      info: "Create goals that match your lifestyle"
    },
    {
      title: "Community Support",
      description: "Join a supportive community",
      image: "/images/feature7.png",
      info: "Get support from like-minded individuals"
    },
    {
      title: "Analytics",
      description: "View detailed fitness insights",
      image: "/images/feature8.png",
      info: "Track your progress with detailed analytics"
    }
  ]

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  return (
    <div className='relative mt-20 flex flex-col gap-10'>
      <h1 className='block text-4xl text-center pt-6 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>Features</h1>

      {/* Carousel for medium screens and below */}
      <div className="md:hidden overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <Cards data={challenge} />
            </div>
          ))}
        </div>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 py-16 place-items-center">
        {challenges.map((challenge, index) => (
          <Cards key={index} data={challenge} />
        ))}
      </div>
    </div>
  )
}

function Cards({ data }: { data: { title: string; description: string; image: string; info: string } }) {
  return (
    <div className='relative w-[250px] h-[400px] bg-green-700 rounded-md flex flex-col justify-center items-end mx-auto'>
      <h1 className='absolute top-0 left-1/2 -translate-x-1/2 mt-4 text-white text-2xl font-bold text-center px-4 '>{data.title}</h1>
      <div className='absolute bottom-0 w-[245px] h-[300px] bg-[#6fdace] rounded-md mb-2 mx-1 flex flex-col items-center justify-between p-4'>
      
        <p className="text-center text-gray-700 font-medium">{data.description}</p>
        <div className="relative w-[200px] h-[200px] mb-4">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className='rounded-md object-cover'
          />
        </div>
        {/* <p className="text-center text-gray-600 text-sm mt-2">{data.info}</p> */}
      </div>
    </div>
  )
}

function Journey() {
  return (
    <div className='w-full relative flex flex-col gap-20 mt-20'>
      <h1 className='block text-4xl text-center pt-8 md:pt-20 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>Every journey starts somewhere, where are you today?</h1>
      <div className='flex justify-center items-center flex-col '>

        <div className='w-[90%] hidden md:flex flex justify-center items-center flex-col gap-10 pb-10'>
          <div className='w-full flex justify-center items-center'>
            <div className='w-[600px] h-[300px] bg-green-400 rounded-l-md flex justify-center items-center'>
              <h1 className='px-5'>"I'm doing just fine - no storms on the horizon, and I plan to keep it that way."</h1>
            </div>
            <Image src="/images/fit.jpg" alt="Logo" className='rounded-r-md' width={300} height={100} />
          </div>
          <div className='w-full flex justify-center items-center'>
            <Image src="/images/fat.jpg" alt="Logo" className='rounded-l-md' width={300} height={100} />
            <div className='w-[600px] h-[300px] bg-green-400 rounded-r-md flex justify-center items-center'>
              <h1 className='px-5'>"Too much sitting, not enough moving — feeling the energy slump and the extra inches creeping in."</h1>
            </div>

          </div>

        </div>
        <div className='flex md:hidden flex-col gap-20'>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <Image src="/images/fit.jpg" alt="Logo" className='rounded-r-md' width={300} height={100} />
            <div className='w-[80%] h-[100px] bg-green-400 rounded-l-md flex justify-center items-center'>
              <h1 className='px-5'>"I'm doing just fine - no storms on the horizon, and I plan to keep it that way."</h1>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <Image src="/images/fat.jpg" alt="Logo" className='rounded-r-md' width={300} height={100} />
            <div className='w-[80%] h-[100px] bg-green-400 rounded-l-md flex justify-center items-center'>
              <h1 className='px-5'>"Too much sitting, not enough moving — feeling the energy slump and the extra inches creeping in."</h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <div className="h-screen w-full">
      <Image src="/images/homeback.png" alt="Hero Section" fill className="absolute object-cover z-[-1] rotate-180 opacity-40" />
      <div className='flex flex-col md:flex-row justify-center items-center h-full mx-auto max-w-7xl px-4'>
        <div className='flex-1 flex flex-col gap-5 md:gap-10 justify-center items-start pt-20'>
          <span className=' text-green-400 text-3xl md:text-6xl font-bold'>Small steps big wins</span>
          <span className='text-2xl md:text-4xl font-bold w-fit'>walk,thrive,run. It all starts here</span>
          <button className='bg-green-400 text-white px-10 py-2 w-fit rounded-md'>Start Tracking</button>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <Image src="/images/walking.webp" alt="Logo" width={500} height={100} />
        </div>
      </div>
    </div>
  )
}

function Latest() {
  const items = [
    { image: "/images/latest1.jpg", title: "Blog 1", description: "Be healthy, be happy" },
    { image: "/images/latest2.png", title: "Blog 2", description: "health is wealth" },
    { image: "/images/latest3.webp", title: "Blog 3", description: "stay fit, stay healthy" },
  ]

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])

  return (
    <div className='flex flex-col md:flex-row justify-center items-center pb-10 pt-20 mx-auto max-w-7xl px-4 gap-10'>
      <div className='flex-1 flex flex-col gap-5 md:gap-10 justify-center items-start'>
        <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]'>Latest blogs</h1>
        <p>Stay updated with our latest insights and stories about fitness, wellness, and community engagement.</p>
        <p>From personal journeys to new features, we share everything that matters in the Steppps community.</p>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div className="flex flex-col items-center gap-4 p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className='rounded-md w-full h-[300px] object-cover'
                    width={300}
                    height={300}
                  />

                  <p className="text-center text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='h-16 w-[90%] mt-6 mx-auto flex justify-between items-center'>
      {/* Logo - Always visible */}
      <div className='flex items-center'>
        <Image src="/images/logo-21.webp" alt="Logo" width={100} height={100} />
      </div>

      {/* Hamburger Menu Button - Only visible on mobile */}
      <button
        className='md:hidden p-2'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <nav className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex 
        absolute md:relative 
        top-24 md:top-0 
        left-0 
        w-full md:w-auto 
        bg-white md:bg-transparent 
        shadow-lg md:shadow-none 
        p-4 md:p-0
        flex-col md:flex-row 
        items-center 
        gap-4 md:gap-10
        z-50
      `}>
        <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-10 md:bg-green-400 md:p-2 md:rounded-md md:px-10 md:h-[90px] h-auto font-light'>
          <li className='hover:text-green-400 transition-colors'><a href="#">Home</a></li>
          <li className='hover:text-green-400 transition-colors'><a href="#">Blog</a></li>
          <li className='hover:text-green-400 transition-colors'><a href="#">Features</a></li>
          <li className='hover:text-green-400 transition-colors'><a href="#">Challenges</a></li>
          <li className='hover:text-green-400 transition-colors'><a href="#">About Us</a></li>
        </ul>
      </nav>
    </div>
  )
}


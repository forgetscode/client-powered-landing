import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <Head>
      <title>Client Powered</title>
      <meta name="description" content="Simplify Your Workflow with Client Powered" />
      <link rel="icon" href="/clientpower.png" />
    </Head>
    <div className="absolute top-0 left-0 w-full lg:h-1/4 h-1/6 overflow-hidden z-20">
        <div className="absolute top-0 left-0 h-full w-full bg-purple-500 transform -rotate-12" />
        <div className="absolute top-0 left-0 h-full w-full bg-pink-500 transform -rotate-12 -translate-y-1/3" />
        <div className="absolute top-0 left-0 h-full w-full bg-orange-500 transform -rotate-12 -translate-y-2/3" />
      </div>

    {/* Main Content */}
    <div className="container mx-auto px-8 flex-grow grid place-items-center pt-60 lg:pt-80">
      <div className="grid grid-rows-2 grid-cols-2 gap-8 items-center justify-center">
        <div className="w-full space-y-6 z-40">
          <h1 className="text-4xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-hue-rotate">
            Client Powered
          </h1>
          <h2 className="lg:text-2xl font-black mt-4 text-black">
            Say Goodbye to Client Chase: Simplify Your Workflow with Client Powered
          </h2>
          {/* Sign Up Button */}
          <a href="https://client-powered-nextjs-ea7l.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 relative flex items-center justify-center bg-purple-500 text-white font-bold py-4 px-12 rounded hover:bg-purple-600 transition duration-200 hover:scale-110 transform">
              <span>Sign Up</span>
              <svg className="w-6 h-6 ml-2 text-white animate-spin hidden group-hover:block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 102 0V5zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
          </a>
        </div>
        <div className="w-full relative">
          <Image
            src="/Accounting_1.png"
            alt="Accounting"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>

    {/* Blue Wavy Border */}
    <div className="w-full overflow-hidden flex z-20 -mt-[400px]">
      <svg className="w-full h-64" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 0C120 26.6667 240 53.3333 360 80C480 106.667 600 133.333 720 160C840 186.667 960 213.333 1080 160C1200 106.667 1320 53.3333 1440 0V200H0V0Z" fill="#90CDF4" />
        <path d="M0 0C120 13.3333 240 26.6667 360 40C480 53.3333 600 66.6667 720 80C840 93.3333 960 106.667 1080 80C1200 53.3333 1320 26.6667 1440 0V200H0V0Z" fill="#BFDBFE" />
      </svg>
    </div>

    <div className="w-full overflow-hidden flex">
      <svg className="w-full h-64" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 200C120 173.333 240 146.667 360 120C480 93.3333 600 66.6667 720 40C840 13.3333 960 -13.3333 1080 40C1200 93.3333 1320 146.667 1440 200H0V0H1440V200Z" fill="#FFB5E2" />
        <path d="M0 200C120 186.667 240 173.333 360 160C480 146.667 600 133.333 720 120C840 106.667 960 93.3333 1080 120C1200 146.667 1320 173.333 1440 200H0V0H1440V200Z" fill="#FFC6E7" />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="30s"
          from="0 720 100"
          to="360 720 100"
          repeatCount="indefinite" />
      </svg>
    </div>
    <h3 className="text-5xl text-[#3e50c9] text-center py-16 tracking-wider bg-blue-100">Our client-powered SaaS solution automates notifications and integrates with QuikBooks API, so you can focus on growing your business.</h3>
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
        <div className="w-full lg:w-1/2 pt-16 bg-pink-100 rounded-3xl p-8"> 
          <h4 className="text-6xl font-black mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pb-4">Features</h4>
          <ul className="list-disc list-inside mt-4 space-y-4 text-black text-left">
            <li className='text-2xl font-semibold '>Automate client notifications.</li>
            <li className='text-2xl font-semibold '>Sync data seamlessly with QuikBooks API.</li>
            <li className='text-2xl font-semibold '>Customizable to fit your business needs.</li>
            <li className='text-2xl font-semibold '>Accessible from anywhere, anytime using the cloud-based platform.</li>
            <li className='text-2xl font-semibold '>Improve workflow efficiency and save time and resources.</li>
            <li className='text-2xl font-semibold '>Increase client satisfaction with timely and accurate communication.</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative pt-16">
          <Image
            src="/Accounting_2.png"
            alt="Accounting"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
    <div className="w-full overflow-hidden flex">
      <svg className="w-full h-32" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 0C120 26.6667 240 53.3333 360 80C480 106.667 600 133.333 720 160C840 186.667 960 213.333 1080 160C1200 106.667 1320 53.3333 1440 0V200H0V0Z" fill="#FFEDD5" />
        <path d="M0 0C120 13.3333 240 26.6667 360 40C480 53.3333 600 66.6667 720 80C840 93.3333 960 106.667 1080 80C1200 53.3333 1320 26.6667 1440 0V200H0V0Z" fill="#FFD8B8" />
      </svg>
    </div>
    <div className="w-full overflow-hidden flex">
      <svg className="w-full h-32" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 200C120 173.333 240 146.667 360 120C480 93.3333 600 66.6667 720 40C840 13.3333 960 -13.3333 1080 40C1200 93.3333 1320 146.667 1440 200V0H0V200Z" fill="#FCD5CE" />
        <path d="M0 0C120 26.6667 240 53.3333 360 80C480 106.667 600 133.333 720 160C840 186.667 960 213.333 1080 160C1200 106.667 1320 53.3333 1440 0V200H0V0Z" fill="#FFB5E2" transform="scale(1,-1) translate(0,-200)" />
      </svg>
    </div>

    <div className="container mx-auto px-8 z-10 flex-grow">
      <h2 className="text-5xl font-black text-indigo-800 bg-indigo-100 rounded text-center mb-8 py-16 lg:mb-16">What Our Clients Are Saying</h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8">
      </div>
    </div>

    <div className="container mx-auto px-8 z-10 flex flex-col sm:flex-row w-full">
      <div className="flex flex-col w-full sm:w-1/2 space-y-16">
        <div className='flex flex-col'>
          <div className="flex flex-row items-center space-x-4">
            <div className="relative rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32">
              <Image src="/man1.png" alt="Testimonial 1" layout="fill" objectFit="cover" />
            </div>
            <p className='text-2xl font-semibold'>Jamal Lancrest, HR Block</p>
          </div>
          <blockquote className="text-white bg-indigo-400 rounded-lg p-4 tracking-wide font-medium text-xl  mt-2 lg:mt-4 before:block before:content-open-quote before:text-2xl before:text-blue-500 before:mx-auto before:mb-2">
          "Before using Client Powered, we were spending a significant amount of time chasing down clients for signatures and approvals. With the platform's automated reminders and tracking system, we've been able to reduce the time spent on this task by 70%. This has allowed us to focus on more important tasks, resulting in a more productive and efficient workflow. We highly recommend Client Powered to any business looking to streamline their client communication and save valuable time."
          </blockquote>
        </div>
        <div className='flex flex-col'>
          <div className="flex flex-row items-center space-x-4">
            <div className="relative rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32">
              <Image src="/man2.png" alt="Testimonial 1" layout="fill" objectFit="cover" />
            </div>
            <p className='text-2xl font-semibold'>Armani Hakim, Turbo Tax</p>
          </div>
          <blockquote className="text-white bg-indigo-400 rounded-lg p-4 tracking-wide font-medium text-xl mt-2 lg:mt-4 before:block before:content-open-quote before:text-2xl before:text-blue-500 before:mx-auto before:mb-2">
            "Since implementing Client Powered, we've seen a significant reduction in client churn and an increase in satisfaction. It's become an essential tool for our business."
          </blockquote>
        </div>
      </div>
      <div className="sm:w-1/2 w-full pt-4 lg:mt-0 md:pl-24">
        <Image
          src="/Accounting_4.png"
          alt="Accounting"
          width={600}
          height={600}
        />
      </div>
    </div>


    <div className="w-full overflow-hidden flex pt-16">
      <svg className="w-full h-32" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
        <path d="M0 0C120 26.6667 240 53.3333 360 80C480 106.667 600 133.333 720 160C840 186.667 960 213.333 1080 160C1200 106.667 1320 53.3333 1440 0V200H0V0Z" fill="#90CDF4" />
        <path d="M0 0C120 13.3333 240 26.6667 360 40C480 53.3333 600 66.6667 720 80C840 93.3333 960 106.667 1080 80C1200 53.3333 1320 26.6667 1440 0V200H0V0Z" fill="#BFDBFE" />
      </svg>
    </div>
  </div>
  );
};

export default Home;

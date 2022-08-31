import './App.css';
import { useEffect } from 'react';
import Job from './components/Job';
import bg from './assets/images/bg.jpg';

function App() {

  useEffect(() => {
    document.title = 'Arman Masangkay | Portfolio';
  });

  return (
    <>
    <div className="bg-computer bg-cover bg-blend-overlay bg-slate-900/90 px-10 py-40 flex flex-col justify-center">
        <div className='flex items-center'>
          <div className='flex flex-col w-1/2'>
            <h1 className='text-3xl font-display text-slate-300'>Hey I'm,</h1>
            <h1 className='text-5xl font-display text-slate-200'>Arman</h1>
            <p className='text-slate-400 my-3'>I'm a Web developer and an Illustrator that lives in the Philippines. Thank you for visiting my portfolio. You can scroll down to browse through my work. Enjoy!</p>
            <button className='text-slate-900 flex items-center justify-center bg-teal-500 p-3 rounded-md text-slate-200 mt-4 w-40'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
              <span className='ml-2 font-bold '>  Email Me!</span>
            </button>
          </div>
          <div className='flex justify-center w-1/2'>
            <img src="images/dev.webp" alt="developer" className='rounded-full w-[15rem] grow-0'></img>
          </div>
        </div>
    </div>

    <div className='px-10 pt-10 pb-40 bg-slate-800'>
        <div className='mb-10 text-slate-400 font-sans flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h1 className='text-4xl text-slate-400 font-bold ml-4'>
          Development Works
          </h1>
        </div>
        <div className='flex flex-wrap items-stretch'>
          <Job image={bg} title='Somethign'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          <Job image={bg} title='Acts'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          <Job image={bg}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          <Job image={bg}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          <Job image={bg}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          <Job image={bg}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate L
          </Job>
          
        </div>
    </div>

     <div className='px-10 pt-10 pb-10 bg-slate-100'>
        <div className='mb-10 text-slate-400 font-sans flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          <h1 className='text-4xl font-bold ml-4 text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          Illustration Works
          </h1>
        </div>
      
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                </div>
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='text-center text-slate-500 flex flex-col items-center justify-center mt-10'>
            <h1 className='mt-10 font-display text-2xl'>That's it for now!</h1>
            <p className='mt-4 text-sm'>If you like my work,</p>
            <button className='text-slate-100 flex items-center justify-center bg-teal-500 p-2 rounded-md text-slate-200 mt-1 text-sm w-40'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className='ml-2 font-bold '>  Email me!</span>
            </button>
        </footer>
    </div>

    

    </>
  );
}

export default App;

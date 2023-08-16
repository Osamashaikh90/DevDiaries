import Image from "next/image"

const Hero=()=> {
    return (
        <main>

    <div className="pt-8 pb-20 text-center bg-primary ">

      <div className="grid items-center grid-cols-2 gap-12">

        <div className="left">

          <h1 className="block mb-4 text-4xl font-bold leading-normal" style={{"color": "hsl(210.2970297029703, 100%, 19.80392156862745%)"}}>
            Hi, I&apos;m <b style={{"color": "hsl(229, 76%, 66%)",
  "fontWeight": "inherit"}}>Osama&nbsp;Shaikh</b>.
            <br/>Web Developer
          </h1>

                        <p className="mb-6 font-medium" style={{"color": "hsl(216, 15%, 52%)"}}>
            Specialized in <b>Web Development</b>&nbsp;
            and Core Web Vitals
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-center">
            <a href="mailto:shaikhosama499@gmail.com" className="mt-4 btn btn-primary">Contact Me</a>
            <a href="https://www.linkedin.com/in/osama-shaikh-8641a5211/" className="mt-4 btn btn-secondary">About Me</a>
          </div>

        </div>

        <div className="relative flex items-center justify-center">

          <div className="absolute w-full h-48 bg-contain -translate-x-2/4 opacity-20 left-2/4 top-2/4 bg-[url('/images/Pattern.png')] "></div>
          <div className="relative z-[2] bg-indigo-200">
             <Image
                className="object-contain w-full h-full border top-2/4 translate-x-[20px] translate-y-[30px]"
                src="/images/osama shaikh-modified.png"
                width={200}
                height={200}
                alt="Dave Gray"
                priority={true}
            />
            <div className="shape bg-slate-200 absolute top-2/4 left-2/4 rounded-[2/4] w-[90%] h-[90%] -z-[1]"></div>
            <div className="shape shape2-bg  w-[92%] h-[92%] z-10 shape2-shadow"></div>
          </div>

        </div>

      </div>

            </div> 
    </main>        
    )
}

export default Hero;

// mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black
{/* <section classNameName="w-full mx-auto">
           
        </section> */}
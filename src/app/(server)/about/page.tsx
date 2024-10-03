import Image from "next/image"
import mypics from "../../../assets/img/mypics.jpg"

export default function About() {
    return (
      <div>
        <main>
        <div className="flex py-8">
            <div className="px-6 py-20 pt-20 pl-10 w-[70%]">
                <div className='py-10 text- text-5xl font-bold font-serif text-blue-600 animate-pulse text-center'>
                    Specialized in Automations</div>
                {/* <div className='mt-4 text- text-5xl font-bold font-serif text-blue-600 animate-bounce text-center'>Automations</div> */}
                
                <p className='text-xl fond-bold font-normal text-blue-950 text-center py-15'>"<b>Hi!</b> I am a passionate <u>Front-end Web Developer</u> learner, focused on building interactive, responsive, and user-friendly websites. I enjoy working with HTML, CSS, JavaScript, and modern frameworks to bring creative ideas to life. As I continue learning, I am eager to contribute to real-world projects and enhance my skills further."</p>

            </div>
            <div className="w-[30%] pt-20 pl-10">

                <Image src={mypics}
                    alt="picture"

                    className="rounded-full h-[250px] w-[250px]"
                />
            </div>
        </div>
        </main>
      </div>
    )
  }
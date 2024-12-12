import Image from "next/image";
import Link from "../components/link/link";

export default function Home() {
  return (
    <main className="justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full lg:w-[1008px] px-4 py-20">
        <figure className="w-full">
          <figcaption className="flex flex-row items-center space-x-6">
            <Image 
              className="flex-none rounded-full object-cover" 
              src="/img/profile.png" 
              alt="Profile" 
              width={100} 
              height={100} 
              priority
            />
            <div className="flex-auto">
              <h1 className="text-lg font-semibold">Fabrício Radtke</h1>
              <div className="text-sm text-gray-400">Tech Lead Developer</div>
              <div className="text-sm text-gray-500">Porto Alegre, Brazil</div>
            </div>
          </figcaption>
        </figure>

        <div className="flex flex-col md:flex-row md:gap-16 mt-10">
          {/* Left */}
          <div className="w-full md:w-1/3">
            <section>
              <h2 className="font-semibold">About</h2>

              <p className="text-gray-400 text-sm mt-6">
                Tech Lead Developer at Under, specializing in driving innovative solutions and leading development teams. 
                Passionate about mastering the art and science of programming.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Links</h2>

              <div className="text-sm space-y-4 mt-6">
                <div className="flex items-center">
                  <Image 
                    className="opacity-40 mr-3" 
                    src="/img/github.png" 
                    alt="Github" 
                    width={24} 
                    height={24} 
                    priority
                  />
                  <Link 
                    href="https://github.com/fabricioradtke"
                    text="@fabricioradtke"
                  />
                </div>
                <div className="flex items-center">
                  <Image 
                    className="opacity-40 mr-3" 
                    src="/img/linkedin.png" 
                    alt="Linkedin" 
                    width={24} 
                    height={24} 
                    priority
                  />
                  <Link 
                    href="https://www.linkedin.com/in/fabricioradtke"
                    text="in/fabricioradtke"
                  />
                </div>
                <div className="flex items-center">
                  <Image 
                    className="opacity-40 mr-3" 
                    src="/img/email.png" 
                    alt="Email" 
                    width={24} 
                    height={24} 
                    priority
                  />
                  <Link 
                    href="mailto:fabriciossj@gmail.com"
                    text="fabriciossj@gmail.com"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="w-full md:w-2/3">
            <section className="mt-10 md:mt-0">
              <h2 className="font-semibold">Work Experience</h2>

              <div className="flex flex-col md:flex-row text-sm mt-6">
                <div className="md:w-1/4 text-gray-500">2012 – present</div>
                <div className="md:w-3/4 space-y-2">
                  <Link 
                    href="https://under.com.br"
                    text="Tech Lead Developer – Under"
                  />
                  <p className="text-gray-400">
                    Lead the development of microservices, managing databases, and building asynchronous systems. 
                    Responsible for integrating third-party systems, evaluating new technologies, making architectural decisions, and providing technical guidance. 
                    Expert in maintaining and scaling complex systems, including CMS, CRM, ERP, and marketplaces.
                  </p>
                  <p className="text-gray-500">
                    Python • FastAPI • Django • MySQL • MongoDB • RabbitMQ • Apache Airflow • Linux • Kubernetes • Microservices
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6">
                <div className="w-1/4 text-gray-500">2003 – 2012</div>
                <div className="w-3/4 space-y-2">
                  <p>Web Designer – Freelance</p>
                  <p className="text-gray-400">
                    Designed, developed, and maintained websites, focusing on image editing, layout creation, and prototyping for web systems. 
                    Delivered user-friendly, visually appealing designs with a solid technical foundation for a range of clients.
                  </p>
                  <p className="text-gray-500">
                    PHP • HTML • CSS • JavaScript • jQuery • Wordpress • Photoshop
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Education</h2>

              <div className="flex flex-col md:flex-row text-sm mt-6">
                <div className="w-1/4 text-gray-500">2006 – 2008</div>
                <div className="w-3/4 space-y-2">
                  <Link 
                    href="https://www.mesquita.com.br"
                    text="Technical Certificate in Information Technology – Mesquita"
                  />
                  <p className="text-gray-400">
                    Gained foundational knowledge in programming, algorithm development, networking, operating systems, and computer hardware assembly and maintenance.                  </p>
                  <p className="text-gray-500">
                  C • Java • Delphi • Networking • Operating Systems • Hardware Maintenance
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Skills</h2>

              <div className="text-sm mt-6">
                <ul className="list-disc text-gray-400 pl-4 space-y-1">
                  <li>Extensive experience with Python for building scalable systems and automation.</li>
                  <li>Expertise in FastAPI and Django for creating secure, high-performance platforms.</li>
                  <li>Proficient in JavaScript and React for developing dynamic, interactive web applications.</li>
                  <li>Experienced in MySQL and MongoDB for efficient database management.</li>
                  <li>Built and maintained asynchronous systems using RabbitMQ and Apache Airflow.</li>
                  <li>Skilled in Agile practices for delivering high-quality projects on time.</li>
                  <li>Expertise in designing and deploying microservices architectures for scalable, modular systems.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

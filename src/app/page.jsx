import Image from "next/image";
import ExternalLink from "../components/ExternalLink/ExternalLink";

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
            <div className="flex-auto space-y-0.5">
              <h1 className="text-xl font-semibold">Fabrício Radtke</h1>
              <div className="text-sm text-gray-400">Tech Lead Developer</div>
              <div className="text-sm text-gray-500 flex items-center">
                <div className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </div>
                Porto Alegre, Brazil
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="flex flex-col md:flex-row md:gap-16 mt-10">
          {/* Left */}
          <div className="w-full md:w-1/3">
            <section>
              <h2 className="font-semibold">About</h2>

              <p className="text-gray-400 text-sm mt-6 font-mono">
                Tech Lead Developer at Under, specializing in driving innovative solutions and leading development teams.
                Passionate about mastering the art and science of programming<span className="font-bold text-white animate-pulse">|</span>
              </p>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Skills</h2>

              <div className="text-sm space-y-4 mt-6 font-mono">
                <div className="space-y-2">
                  <h3 className="text-gray3-400">Frontend Development</h3>
                  <p className="text-gray-500 text-xs">
                    React • Next.js • JavaScript • TypeScript • HTML • CSS • Tailwind CSS
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray3-400">Backend Development</h3>
                  <p className="text-gray-500 text-xs">
                    Python • Node.js • PHP • FastAPI • Django • MySQL • MongoDB • RabbitMQ
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray3-400">Tools & Others</h3>
                  <p className="text-gray-500 text-xs">
                    Git • Linux • Docker • CI/CD • Microservices • Agile Methodologies
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Links</h2>

              <div className="text-sm space-y-4 mt-6 font-mono">
                <div className="flex items-center">
                  <div className="text-gray-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </div>
                  <ExternalLink
                    href="https://github.com/fabricioradtke"
                    text="@fabricioradtke"
                  />
                </div>
                <div className="flex items-center">
                  <div className="text-gray-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                    </svg>
                  </div>
                  <ExternalLink
                    href="https://www.linkedin.com/in/fabricioradtke"
                    text="in/fabricioradtke"
                  />
                </div>
                <div className="flex items-center">
                  <div className="text-gray-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" />
                    </svg>
                  </div>
                  <ExternalLink
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

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2012 – present</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>
                    <ExternalLink
                      href="https://under.com.br"
                      text="Tech Lead Developer – Under"
                    />
                  </h3>
                  <p className="text-gray-400">
                    Lead the development of microservices, managing databases, and building asynchronous systems.
                    Responsible for integrating third-party systems, evaluating new technologies, making architectural decisions, and providing technical guidance.
                    Expert in maintaining and scaling complex systems, including CMS, CRM, ERP, and marketplaces.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Python • FastAPI • Django • MySQL • MongoDB • RabbitMQ • Apache Airflow • Linux • Kubernetes • Microservices
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2003 – 2012</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Web Designer – Freelance</h3>
                  <p className="text-gray-400">
                    Designed, developed, and maintained websites, focusing on image editing, layout creation, and prototyping for web systems.
                    Delivered user-friendly, visually appealing designs with a solid technical foundation for a range of clients.
                  </p>
                  <p className="text-gray-500 text-xs">
                    PHP • HTML • CSS • JavaScript • jQuery • Wordpress • Photoshop
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Education</h2>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2006 – 2008</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>
                    <ExternalLink
                      href="https://www.mesquita.com.br"
                      text="Technical Certificate in Information Technology – Mesquita"
                    />
                  </h3>
                  <p className="text-gray-400">
                    Gained foundational knowledge in programming, algorithm development, networking, operating systems, and computer hardware assembly and maintenance.
                  </p>
                  <p className="text-gray-500 text-xs">
                    C • Java • Delphi • Networking • Operating Systems • Hardware Maintenance
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-semibold">Projects</h2>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">ongoing</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Infrastructure Management System</h3>
                  <p className="text-gray-400">
                    API-first platform for managing and provisioning internal and client infrastructure, with SDK and CLI support, leveraging modern automation tools.
                  </p>
                  <p className="text-gray-500 text-xs">
                    VyOS • Apache Airflow • Terraform • Ansible • Python • FastAPI
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2020</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Financial Management System</h3>
                  <p className="text-gray-400">
                    Versatile system for invoices, tax documents, payments, and financial tracking, ensuring seamless operations and compliance.
                  </p>
                  <p className="text-gray-500 text-xs">
                    SAP • Cielo • Python • Django • MySQL • JavaScript • Bootstrap
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2018</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Helpdesk System</h3>
                  <p className="text-gray-400">
                    Dynamic solution for ticket management and team collaboration, streamlining workflows and improving issue resolution processes.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Python • Django • MySQL • jQuery • JavaScript
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2017</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Client Control Panel</h3>
                  <p className="text-gray-400">
                    Centralized dashboard for client profile management, financial control, and product subscriptions.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Python • Django • MySQL • Vue.js • Bootstrap
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2016</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Lead Management System</h3>
                  <p className="text-gray-400">
                    Specialized tool for organizing, tracking, and qualifying leads, boosting sales performance and efficiency.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Python • Django • MySQL • jQuery • JavaScript
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2015</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Content Management System</h3>
                  <p className="text-gray-400">
                    User-friendly CMS for creating, managing, and customizing web content, supporting diverse business needs.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Python • Django • MySQL • jQuery • JavaScript
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2014</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>File Storage System</h3>
                  <p className="text-gray-400">
                    Secure platform for client file storage, sharing, and management with robust access control and scalability.
                  </p>
                  <p className="text-gray-500 text-xs">
                    SwiftStack • Python • Django • MySQL • jQuery • JavaScript
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row text-sm mt-6 font-mono">
                <div className="md:w-1/4 text-gray-500">2013</div>
                <div className="md:w-3/4 space-y-2">
                  <h3>Data Center Management System</h3>
                  <p className="text-gray-400">
                    Comprehensive platform for managing networks, inventory, and hardware assets, designed for efficient data center operations.
                  </p>
                  <p className="text-gray-500 text-xs">
                    VMware • Python • Django • MySQL • RabbitMQ • jQuery • JavaScript
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

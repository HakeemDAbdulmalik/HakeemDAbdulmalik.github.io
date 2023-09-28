export default function Profile() {
  const eduDetails = [
    {
      title: 'Hack Reactor',
      date: 'Feb 2022 - May 2022',
      company: 'Hack Reactor',
      thumbNail: 'https://www.galvanize.com/wp-content/uploads/2022/11/hack-reactor_logo_full-color_light-background-1-310x45.png',
      summary: "At Hack Reactor, students dive deep into the realm of software engineering through a series of meticulously crafted projects. Beginning with concise sprints focused on specific technologies, learners swiftly transition to constructing comprehensive full-stack applications. Emphasizing real-world collaborative dynamics, students frequently join forces on group endeavors, culminating in a capstone project that showcases their holistic training. The curriculum further enriches the experience by introducing advanced challenges in system design, deployment, and optimization, occasionally punctuated by exhilarating hackathons. This immersive approach ensures graduates are not just coders, but versatile tech professionals. For a detailed look at our latest projects and curriculum updates, we invite you to explore further on our official platform.",
      techStack: ['JavaScript (ES5 and ES6)', 'JQuery', 'React', 'HTML5', 'CSS3',
      'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'PWA', 'RESTful API', 'Bash','Jest', 'Mocha', 'Chai', 'K6', 'loader.io', 'AWS: EC2 / RDS / S3', 'Vim', 'Git', 'npm', 'Nx', 'Webpack', 'Babel', 'Agile Methodology', 'TDD']


    },
    {
      title: 'Santa Fe College',
      date: 'Feb 2022 - May 2022',
      thumbNail: 'https://sfcollege.edu/Assets/sf/master/img/sf-logo.svg',
      summary: "This Programming and Analysis, A.S. is designed to prepare students for entry-level positions as computer programmers, Internet programmers, and website developers. Students will be prepared to enter careers such as Computer Programmer, Web Master, HTML author, Site Developer and Manager, and Internet Programmer.\nThe program offers hands-on training and extensive experience in a wide variety of areas. Students learn various programming languages, including C++, C#, MySQL, JavaScript, Java and Python. Students also learn the latest versions of HTML, CSS, and other scripting languages. The curriculum is under constant revision to keep current with the latest technologies and newest computer programming and scripting languages. Both client-side and server-side technologies are covered.\nStudents also learn to utilize software to assist with graphics and web page design. Students graduating with this degree are in a position to find an excellent job in the field and are also well-prepared to continue their education toward a bachelor’s degree in Computer Science or Technology.",
      techStack: ['JavaScript (ES5 and ES6)', 'JQuery', 'HTML5', 'CSS3',
      'MySQL', 'Java', 'C++', 'C#', 'Dot Net', 'Bash', 'FTP', ]


    },
  ];
  return (
    // <div class="Education-body">
    //   <h3>Education</h3>
    //   {eduDetails.map((details) => {
    //     return <div>
    //       <p>
    //         {details.date}<br></br>
    //         {details.title}<br></br>
    //         {details.company}<br></br>
    //         <a href={details.thumbNail}>
    //           <img src={details.thumbNail} alt="Hack Reactor Logo" />
    //         </a><br></br>
    //         {details.summary}
    //         <ul>
    //           {details.techStack.map((tech) => {
    //             return <li>{tech}</li>
    //           })}
    //         </ul>
    //       </p>
    //     </div>
    //   })}
    // </div>

    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
              <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writing</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div
                      className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 col-span-6">
                        <p className="-mt-1 text-sm font-semibold leading-6">2020</p>
                        <h3 className="-mt-1"><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                            target="_blank" rel="noreferrer"
                            aria-label="Integrating Algolia Search with WordPress Multisite"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Integrating
                              Algolia Search with WordPress <span className="inline-block">Multisite<svg
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div
                      className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 col-span-6">
                        <p className="-mt-1 text-sm font-semibold leading-6">2019</p>
                        <h3 className="-mt-1"><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/"
                            target="_blank" rel="noreferrer"
                            aria-label="Building a Headless Mobile App CMS From Scratch"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Building
                              a Headless Mobile App CMS From <span className="inline-block">Scratch<svg
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
  )
}
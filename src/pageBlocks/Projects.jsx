export default function Profile() {
  const expDetails = [
    {
      title: 'Library',
      thumbNail: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75',
      summary: " Expert advice and guidance on software-related matters Assessment of current software system or development project Recommendations for new software solutions, processes, and tools Collaboration with client's development team Training and support for client's staff Optimization of software systems to achieve business objectives ",
      techStack: ['Typescript', 'HTML', 'CSS', 'PlayWright', 'Cheerio', 'AWS', 'ApiFy', 'Node.js']

    },
  ];
  return (
    // <div class="Experience-body">
    //   <h3>Projects</h3>
    //   {expDetails.map((details) => {
    //     return <div>
    //       <p>
    //         {details.date}<br></br>
    //         {details.title}<br></br>
    //         {details.company}<br></br>
    //         <a href={details.thumbNail}>
    //           <img src={details.thumbNail} alt="Place Holder" />
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

    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects">
              <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div
                      className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank"
                            rel="noreferrer" aria-label="Build a Spotify Connected App"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Build
                              a Spotify Connected <span className="inline-block">App<svg
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                        <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the
                          Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div
                      className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://spotify-profile.herokuapp.com/" target="_blank" rel="noreferrer"
                            aria-label="Spotify Profile"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Spotify
                              <span className="inline-block">Profile<svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20" fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                        <p className="mt-2 text-sm leading-normal">Web app for visualizing personalized Spotify data. View
                          your top artists, top tracks, recently played tracks, and detailed audio information about
                          each track. Create and save new playlists of recommended tracks based on your existing
                          playlists and more.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Express</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Spotify API</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Heroku</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div
                      className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://halcyon-theme.netlify.app/" target="_blank" rel="noreferrer"
                            aria-label="Halcyon Theme"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Halcyon
                              <span className="inline-block">Theme<svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20" fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                        <p className="mt-2 text-sm leading-normal">Minimal dark blue theme for VS Code, Sublime Text, Atom,
                          iTerm, and more.</p><a
                          className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                          href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                          target="_blank" rel="noreferrer"
                          aria-label="Over 100,000 installs on Visual Studio Code Marketplace"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            className="mr-1 h-4 w-4" aria-hidden="true">
                            <path
                              d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z">
                            </path>
                            <path
                              d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z">
                            </path>
                          </svg><span>100k+ Installs</span></a>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div
                      className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div
                        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                      </div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3><a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://v4.brittanychiang.com/" target="_blank" rel="noreferrer"
                            aria-label="brittanychiang.com (v4)"><span
                              className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>brittanychiang.com
                              <span className="inline-block">(v4)<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true">
                                  <path fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"></path>
                                </svg></span></span></a></h3>
                        <p className="mt-2 text-sm leading-normal">An old portfolio site built with Gatsby with 6k+ stars
                          and 3k+ forks</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Gatsby</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Styled Components</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Netlify</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-12"><a
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                    aria-label="View Full Project Archive" href="/archive"><span><span
                        className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View
                        Full Project </span><span className="whitespace-nowrap"><span
                          className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span><svg
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clip-rule="evenodd"></path>
                        </svg></span></span></a></div>
              </div>
            </section>
  )
}
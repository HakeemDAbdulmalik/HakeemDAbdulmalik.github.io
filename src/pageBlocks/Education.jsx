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
    <div class="Education-body">
      <h3>Education</h3>
      {eduDetails.map((details) => {
        return <div>
          <p>
            {details.date}<br></br>
            {details.title}<br></br>
            {details.company}<br></br>
            <a href={details.thumbNail}>
              <img src={details.thumbNail} alt="Hack Reactor Logo" />
            </a><br></br>
            {details.summary}
            <ul>
              {details.techStack.map((tech) => {
                return <li>{tech}</li>
              })}
            </ul>
          </p>
        </div>
      })}
    </div>
  )
}
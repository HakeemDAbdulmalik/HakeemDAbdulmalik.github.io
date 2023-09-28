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
    <div class="Experience-body">
      <h3>Projects</h3>
      {expDetails.map((details) => {
        return <div>
          <p>
            {details.date}<br></br>
            {details.title}<br></br>
            {details.company}<br></br>
            <a href={details.thumbNail}>
              <img src={details.thumbNail} alt="Place Holder" />
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
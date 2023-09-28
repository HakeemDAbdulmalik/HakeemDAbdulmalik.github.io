export default function Profile() {
  const expDetails = [
    {
      date: 'April 2023 - August 2023',
      title: 'Software Consultant',
      company: 'Vobile Inc',
      website: 'https://vobile.com',
      summary: "Expert advice and guidance on software-related matters Assessment of current software system or development project Recommendations for new software solutions, processes, and tools Collaboration with client's development team Training and support for client's staff Optimization of software systems to achieve business objectives ",
      techStack: ['Typescript', 'HTML', 'CSS', 'PlayWright', 'Cheerio', 'AWS', 'ApiFy', 'Node.js']

    },
    {
      date: 'April 2023 - August 2023',
      title: 'Support Engineer Tier 3',
      company: 'SharpSpring by Constant Contact',
      website: 'https://sharpspring.com/',
      summary: "Advised 20 to 40 clients daily on effective usage of SharpSpring automation software. Identified and reported software bugs while testing updates and assisting clients for a seamless experience. Built strong client relationships, enabling effective assistance across multiple projects.",
      techStack: ['Jira', 'Zendesk', 'Zoom', 'Slack']

    },
  ];
  return (
    <div class="Experience-body">
      <h3>Experience</h3>
      {expDetails.map((details) => {
        return <div>
          <p>
            {details.date}<br></br>
            {details.title}<br></br>
            {details.company}<br></br>
            <a href={details.website}>{details.website}</a><br></br>
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
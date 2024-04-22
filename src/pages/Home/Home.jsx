import Container from '../../components/Container';
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <Container className='pt-4 relative flex flex-col gap-12'>
        <div className={styles.hero}>
          <div className={styles.name}>Yunfan Yang</div>
          <div className={styles.headline}>Software Development Intern at AGvisorPRO</div>
          <div className={styles.headline}>Bachelor (Honours) of Science in Computer Science</div>
        </div>

        <div className='recent_works'>
          <div className={styles.title}>Recent Works</div>
          <div className={styles.table}>
            {
              recentWorks.map((work, index) => (
                <div key={index} className={styles.table_row}>
                  <div className={styles.table_row_description}>{work.affiliation}</div>
                  <div className={styles.table_row_name}>
                    {work.name}
                    {/* <span className={styles.table_row_name_type}>{work.type}</span> */}
                  </div>
                  <div className={styles.table_row_description}>{work.authors}</div>
                  <div className={styles.table_row_description}>{work.date}</div>
                </div>
              ))
            }
          </div>
        </div>

        <div className={styles.area_of_interest}>
          <div className={styles.title}>Area of Interests</div>
          <div className={styles.interests}>
            <div className={styles.interest}>Software Maintainability</div>
            <div className={styles.interest}>Software/Web Development</div>
            <div className={styles.interest}>User Interface Design</div>
            <div className={styles.interest}>Workflow Automation</div>
            <div className={styles.interest}>Cats</div>
          </div>
        </div>
      </Container>
    </>
  )
}

const recentWorks = [
  {
    affiliation: "University of Calgary",
    name: "A Knowledge Graph Approach to Code Smells Detection in Python",
    authors: "Supervised by Jon Rokne",
    date: "September 2023 - Present",
    type: "Paper",
  },
  {
    affiliation: "University of Calgary",
    name: "Longevity Insights: Unveiling the Determinants of Life Expectancy of the Americas Continent",
    authors: "Co-authored with Ned Liu",
    date: "September 2023 - April 2024",
    type: "Paper",
  },
  {
    affiliation: "University of Calgary",
    name: "Regicide (a native JavaScript and CSS remake)",
    authors: "By Yunfan Yang",
    date: "September 2023 - December 2023",
    type: "Project",
  },
  {
    affiliation: "TechStart UCalgary",
    name: "Lifeline (a syllabus deadline extration tool)",
    authors: "Lead by Timothy Macphail",
    date: "September 2022 - April 2023",
    type: "Project",
  },
  {
    affiliation: "University of Calgary",
    name: "A Comparison of Five Commonly Used Machine Learning Algorithms Applied to Potable Water Detection",
    authors: "Co-authored with Siyuan Liu, Muhan Yao",
    date: "October 2020 - December 2021",
    type: "Paper",
  },
  {
    affiliation: "University of Calgary",
    name: "PHIL Letter Grade Calculator",
    authors: "Contributed by Richard Zach, Ricky Bhatti and Daniel Sabourov",
    date: "December 2020 - March 2023",
    type: "Project",
  }
]

export default Home
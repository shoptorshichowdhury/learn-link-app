import PageTitle from "../components/shared/PageTitle";
import courseIcon from "../assets/allServiceIcon.png";
import aboutImage from "../assets/about-us.jpg";

const About = () => {
  return (
    <section>
      <PageTitle title={`Learn Link | All Services`} />
      {/* header part */}
      <div className="h-[200px] md:h-[300px] lg:h-[450px] overflow-hidden bg-secondary/20">
        <div className="w-11/12 mx-auto flex items-center justify-between">
          <div className="w-1/2 md:w-3/5 space-y-1 md:space-y-3">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-semibold text-primary font-poppins">
              About Us
            </h3>
            <p className="text-xs text-primary md:text-base">
              Learn Link connects instructors and students, offering easy course
              management and discovery.
            </p>
          </div>
          <div className="w-1/2 md:w-2/5">
            <img
              className="w-full h-full object-cover"
              src={courseIcon}
              alt="courses"
            />
          </div>
        </div>
      </div>

      {/* main part */}
      <div className="w-11/12 mx-auto py-12 space-y-5">
        {/* image part here */}
        <div>
          <img
            className="w-full h-full object-cover rounded-md"
            src={aboutImage}
            alt="about learn link"
          />
        </div>

        {/* text content part */}
        <div className="space-y-3 md:space-y-5">
          <h3>
            Welcome to Learn Link, your ultimate platform for discovering,
            managing, and sharing educational services. We are here to make
            learning more accessible and interactive by connecting instructors
            and students seamlessly.
          </h3>
          <p>
            Our mission is to provide a user-friendly, dynamic platform where
            instructors can offer courses and students can easily browse, book,
            and manage their learning journeys. Whether you're looking to teach
            or learn, Learn Link brings knowledge closer to you.
          </p>

          <div className="space-y-2">
            <h4 className="text-lg md:text-xl lg:text-2xl font-medium">🔸 Our Purpose</h4>
            <p>
              Learn Link simplifies the way you interact with education. Our
              goal is to connect students with courses that match their needs
              and interests, empowering instructors to manage and share their
              knowledge.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg md:text-xl lg:text-2xl font-medium">🔹 Key Feature</h4>
            <ul className="list-disc pl-8">
              <li>
                Dynamic Course Listings: Discover popular courses in real-time.
              </li>
              <li>
                Course Management: Instructors can easily add, update, and
                manage courses.
              </li>
              <li>
                Personalized Experience: Switch between light and dark modes and
                engage with courses that match your learning goals.
              </li>
            </ul>
          </div>

          <div>
            <p>
              We aim to create a collaborative environment where education is
              accessible to all. Learn Link is dedicated to enhancing the
              learning experience for both students and instructors through
              innovation and simplicity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

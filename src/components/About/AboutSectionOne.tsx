import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import WorkingProcess from "./WorkingProcess";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Know Our Working Process."
            paragraph="When approaching custom software solutions, it's important to choose a software development agency that has the processes, tools, experience, and internal culture to make your software project a success."
            center
          />

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {WorkingProcess.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

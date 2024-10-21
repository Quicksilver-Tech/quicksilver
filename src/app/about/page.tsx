import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section id="About Page" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph="We are a digital transformation consultancy and engineering company that delivers cutting edge solutions for global organisations and technology startups. Since 2007 we have been helping companies and established brands reimagine their business through digitalisation."
            center
          />
          <AboutSectionOne />
        </div>
      </section>
    </>
  );
};

export default AboutPage;

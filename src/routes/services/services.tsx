import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Interview Preparation",
    description:
      "Get ready for your next big opportunity with our AI-powered mock interviews. Receive detailed performance feedback and tips tailored to your industry and experience level.",
    link: "/services/interview-preparation",
    bg: "bg-gradient-to-r from-indigo-500 to-purple-600",
  },
  {
    title: "Career Coaching",
    description:
      "Work 1-on-1 with certified career coaches to define your goals, identify strengths, and create a clear roadmap to success. Perfect for job changers, new graduates, and professionals seeking clarity.",
    link: "/services/career-coaching",
    bg: "bg-gradient-to-r from-emerald-500 to-teal-600",
  },
  {
    title: "Resume Building",
    description:
      "Build a modern, keyword-optimized resume that gets noticed. Our resume experts help you highlight achievements and present your skills in the best light.",
    link: "/services/resume-building",
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Professional Services to Elevate Your Career
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Our curated services are designed to help you gain confidence, clarity, and control over your career journey—no matter where you're starting from.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 ${service.bg} opacity-20`} />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Explore {service.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

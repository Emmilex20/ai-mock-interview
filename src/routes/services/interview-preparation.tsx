import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles } from "lucide-react";

const InterviewPreparation = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Expert-Led Interview Preparation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get the edge you need to stand out. Our AI-powered mock interviews, personalized coaching, and industry-specific insights help you walk into every interview prepared, confident, and ready to succeed.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Why Choose Our Interview Prep Program?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Receive detailed, structured feedback tailored to your role and industry.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Practice with behavioral, technical, and situational questions from real employers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Enhance your clarity, confidence, and professionalism through expert coaching.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Get access to voice tone, eye contact, and body language analysis (for video interviews).</span>
                </div>
              </CardContent>
            </Card>

            <div>
              <Link to="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 mt-4 text-lg rounded-lg">
                  <Sparkles className="mr-2" />
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/img/interview-prep.jpg"
              alt="Mock Interview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Process */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our approach combines technology, expert insights, and practical experience to ensure you’re ready for every stage of the hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">1. Assessment</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We evaluate your background, the role you're applying for, and the company’s expectations to tailor the preparation plan.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">2. Mock Interview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Engage in simulated interviews with real-world questions, followed by AI-driven and expert human feedback.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">3. Coaching & Refinement</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Receive coaching on your responses, body language, and delivery to maximize your performance and impact.
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Next Interview?</h3>
          <p className="text-muted-foreground mb-6">
            Let’s work together to ensure you're confident, prepared, and positioned for success.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg rounded-lg">
              Start Your Interview Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparation;

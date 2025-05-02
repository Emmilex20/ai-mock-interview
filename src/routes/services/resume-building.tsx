import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles } from "lucide-react";

const ResumeBuilding = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Professional Resume Building</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make a lasting impression with a tailored, ATS-optimized resume that highlights your strengths and helps you land more interviews.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Why Our Resume Services Work
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Resumes crafted by career experts and hiring professionals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Tailored to your target job, industry, and career level.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Keyword-optimized to pass Applicant Tracking Systems (ATS).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span>Designed to showcase impact, results, and unique strengths.</span>
                </div>
              </CardContent>
            </Card>

            <div>
              <Link to="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 mt-4 text-lg rounded-lg">
                  <Sparkles className="mr-2" />
                  Request a Free Resume Review
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/img/resume-building.jpg"
              alt="Professional Resume Writing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Process */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Resume Creation Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We don’t just write resumes—we help you tell your professional story. Here’s how our process works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">1. Discovery</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We conduct a deep-dive into your background, achievements, and goals.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">2. Resume Drafting</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We craft a customized, ATS-friendly resume aligned with your career aspirations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">3. Review & Finalization</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              You’ll receive your polished resume with optional revisions and career guidance.
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">Your Resume is Your First Impression—Make It Count</h3>
          <p className="text-muted-foreground mb-6">
            Whether you're entering the job market or aiming for a promotion, a compelling resume opens doors. Let’s craft yours.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg rounded-lg">
              Build My Resume Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;

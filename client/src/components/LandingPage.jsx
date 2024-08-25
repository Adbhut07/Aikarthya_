import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Manage and Showcase Your Projects Seamlessly
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            A platform designed to help you take your ideas from concept to reality.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureBox title="Project Showcase" description="Showcase your projects with rich details and media." />
            <FeatureBox title="Collaboration" description="Work together with your team in real-time." />
            <FeatureBox title="Progress Tracking" description="Track your project's progress with intuitive tools." />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <StepBox step="1" title="Create an Account" description="Sign up and start managing your projects." />
            <StepBox step="2" title="Add Your Projects" description="Add details, media, and collaborators to your projects." />
            <StepBox step="3" title="Track and Showcase" description="Monitor progress and showcase your work to the world." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <TestimonialBox
              quote="This platform has completely transformed the way we manage our projects!"
              name="Jane Smith"
              role="Project Manager, ABC Corp"
            />
            <TestimonialBox
              quote="I love how easy it is to showcase our work to potential clients."
              name="John Doe"
              role="Freelance Developer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureBox = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const StepBox = ({ step, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold text-blue-600">{step}</h3>
    <h4 className="text-xl font-semibold text-gray-800 mt-4">{title}</h4>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const TestimonialBox = ({ quote, name, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-gray-800 italic">"{quote}"</p>
    <p className="mt-4 text-gray-800 font-semibold">{name}</p>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default LandingPage;
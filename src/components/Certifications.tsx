const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image:
      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    title: "AWS Certified AI Practitioner",
    image:
      "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
  },
  {
    title: "AWS Certified Developer – Associate",
    image:
      "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Demonstrating excellence and expertise in top-notch cloud solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 hover:bg-yellow-50 transition-all duration-300 hover:shadow-xl flex flex-col items-center"
            >
              <h3 className="text-xl text-center font-semibold mb-4 text-gray-900 min-h-[2lh]">
                {certification.title}
              </h3>
              <img
                className="w-60" // Fix this
                src={certification.image}
                alt={certification.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

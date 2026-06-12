import heroImage from "../assets/hospital bg.jpg";
import doctorImage from "../assets/docture1.jpg";
import docture2 from "../assets/docture2.jpg";
import docture3 from "../assets/docture3.jpg";
 import docture4 from "../assets/docture 4.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HealthCare+</h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <a href="#hero" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-blue-600">
                Doctors
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Book Appointment
          </button>
        </div>
      </nav>

      <section
        id="hero"
        className="container mx-auto px-6 "
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              Trusted Healthcare Services
            </p>

            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Your Health Is Our Top Priority
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              We provide world-class healthcare services with experienced
              doctors, modern facilities, and compassionate care for every
              patient.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Make Appointment
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src={heroImage}
              alt="Hospital"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">Emergency Care</h3>
              <p className="text-gray-600">
                24/7 emergency services with skilled medical professionals ready
                to help.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">Specialist Doctors</h3>
              <p className="text-gray-600">
                Access experienced specialists across various medical fields.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">Laboratory Services</h3>
              <p className="text-gray-600">
                Modern diagnostic and laboratory facilities for accurate
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 text-center gap-8">
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p>Doctors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p>Patients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">20+</h3>
              <p>Departments</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-gray-100">
        <div>
          <p className="text-lg text-gray-600 text-center mb-4">
            Meet Our Team
          </p>
          <h1 className="text-4xl font-bold text-center">
            Specialists who know your name, not just your file
          </h1>
        </div>

        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Doctors
          </h2>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src={doctorImage}
              alt="Dr. John Doe"
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-bold">Dr. John Doe</p>
            <p className="text-gray-600">Cardiologist</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src={docture2 }
              alt="Dr. Jane Smith"
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-bold">Dr. Jane Smith</p>
            <p className="text-gray-600">Neurologist</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src={docture3}
              alt="Dr. Emily Davis"
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-bold">Dr. Emily Davis</p>
            <p className="text-gray-600">Pediatrician</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img
              src={docture4}
              alt="Dr. Michael Brown"
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-xl font-bold">Dr. Michael Brown</p>
            <p className="text-gray-600">Orthopedic Surgeon</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Medical Assistance?</h2>

          <p className="text-gray-600 mb-8">
            Schedule an appointment with our healthcare experts today.
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">HealthCare+</h3>

          <p>© 2026 HealthCare+. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

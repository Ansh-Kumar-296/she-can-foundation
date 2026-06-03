export default function Footer() {
  return (
    <footer className="bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-r from-neutral-900 to-neutral-800 p-12 backdrop-blur-xl">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            She Can Foundation
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Empowering women through education, mentorship,
            leadership development and community support.
            Together, we create opportunities and inspire change.
          </p>

          <div className="mt-6 space-y-2 text-neutral-400">
            <p>Email: contact@shecanfoundation.org</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>Location: India</p>
          </div>
        </div>

        <div className="mb-10 h-px w-full bg-white/10" />

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Foundation
            </h3>

            <ul className="space-y-3 text-neutral-400">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Leadership Team</li>
              <li>Impact Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Programs
            </h3>

            <ul className="space-y-3 text-neutral-400">
              <li>Education</li>
              <li>Workshops</li>
              <li>Mentorship</li>
              <li>Community Support</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-neutral-400">
              <li>Home</li>
              <li>Volunteer</li>
              <li>Admin Login</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Follow Us
            </h3>

            <ul className="space-y-3 text-neutral-400">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-neutral-500 md:flex-row">
          <p>
            © 2026 She Can Foundation. All rights reserved.
          </p>

          <p>
            Built with Love
          </p>
        </div>

      </div>
    </footer>
  );
}
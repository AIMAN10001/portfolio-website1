import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta bg-gradient-to-r from-[#05a2a2c8] to-[#046951f0] py-16 px-8 rounded-lg">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <div className="relative inline-block">
        <Link to="/contact" className="btn relative z-10">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default CTA;

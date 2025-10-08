import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/services1.json";

// ✅ Import Lucide icons
import {
  Wifi,
  Server,
  Network,
  Cloud,
  Shield,
  Database,
  Monitor,
  PhoneCall,
  Code,
} from "lucide-react";

// Ruby Red brand color
const RUBY_RED = "#E0115F";

const Services1 = () => {
  // ✅ Icon map for each service
  const iconMap = {
    "Internet Services": <Wifi size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Co-Location & Hosting": <Server size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Connectivity Services": <Network size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Cloud Solutions": <Cloud size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Information Security": <Shield size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Data Storage & Backup": <Database size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Managed IT & Facility Services": <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Unified Communications & Mobility": <PhoneCall size={50} color={RUBY_RED} strokeWidth={1.6} />,
    "Open-Source IT Solutions": <Code size={50} color={RUBY_RED} strokeWidth={1.6} />,
  };

  return (
    <div className="service-area py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <SectionTitle
                SubTitle="SOLUTEK COMPANY"
                Title="How Professional IT Services<br> Can Drive <span>Success.</span>"
              />
            </div>
          </div>
        </div>

        {/* 3×3 GRID */}
        <div className="row g-4 justify-content-center">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 d-flex">
              <div
                className="service-single-box w-100 text-center p-4 shadow-sm rounded-4 h-100 d-flex flex-column justify-content-between border border-light"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "default", // prevents click hover pointer
                }}
              >
                {/* ICON */}
                <div
                  className="service-icon mb-4 d-flex justify-content-center"
                  style={{ transition: "transform 0.3s ease" }}
                >
                  {iconMap[item.title] || (
                    <Monitor size={50} color={RUBY_RED} strokeWidth={1.6} />
                  )}
                </div>

                {/* CONTENT */}
                <div className="service-content flex-grow-1">
                  <h3 className="service-title mb-3 fw-semibold">{item.title}</h3>
                  <ul className="list-unstyled text-start d-inline-block text-secondary small">
                    {item.desc.map((point, index) => (
                      <li key={index} className="mb-1">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services1;

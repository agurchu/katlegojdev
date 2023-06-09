import React from "react";
import "./services.css";
import SectionHeading from "../../components/SectionHeading";
import ServiceBadge from "../../components/serviceBadge";

export default function Services() {
  return (
    <section id="services" className="container-px services">
      <SectionHeading title={"Services"} body={"Crafting Digital Solutions"} />
      <div>
        <ServiceBadge />
      </div>
    </section>
  );
}

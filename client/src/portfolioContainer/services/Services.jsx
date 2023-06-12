import React, { useState } from "react";
import "./services.css";
import SectionHeading from "../../components/SectionHeading";
import ServiceBadge from "../../components/ServiceBadge";
import { ServiceData } from "../../data/ServiceData";

export default function Services() {
  return (
    <section id="services" className="container services">
      <SectionHeading title={"Services"} body={"Crafting Digital Solutions"} />
      <div className="badges grid grid-cols-footer">
        {ServiceData &&
          ServiceData.map((item) => <ServiceBadge key={item.id} item={item} />)}
      </div>
    </section>
  );
}

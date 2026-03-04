import React, { useState } from "react";


import ServiceBadge from "./ServiceBadge";

import SectionTitle from "./SectionTitle";
import { ServiceData } from "../data/ServicesData";


export default function Services() {
  return (
    <section id="services" className="container services">
      <SectionTitle >Services</SectionTitle>
      <p>Crafting Digital Solutions</p>
      <div className="badges grid grid-cols-footer">
        {ServiceData &&
          ServiceData.map((item) => <ServiceBadge key={item.id} item={item} />)}
      </div>
    </section>
  );
}
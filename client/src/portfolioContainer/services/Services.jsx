import React, { useState } from "react";
import "./services.css";
import SectionHeading from "../../components/SectionHeading";
import ServiceBadge from "../../components/serviceBadge";
import ViewMore from "../../components/ViewMore";
import { FaReact } from "react-icons/fa";
import { SiMaterialdesign, SiPeakdesign } from "react-icons/si";
import { MdDesignServices, MdQueueMusic } from "react-icons/md";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="container-px services">
      <SectionHeading title={"Services"} body={"Crafting Digital Solutions"} />
      <div className="badges grid grid-cols-footer">
        <ServiceBadge
          onClick={() => setOpen(1)}
          title={"Frontend Development"}
          icon={<FaReact size={32} />}
        />
        {open === 1 && <ViewMore />}
        <ServiceBadge
          title={"Web Design"}
          icon={<SiMaterialdesign size={32} />}
        />
        <ServiceBadge title={"Branding"} icon={<SiPeakdesign size={32} />} />
        <ServiceBadge
          title={"Graphic Design"}
          icon={<MdDesignServices size={32} />}
        />
        <ServiceBadge
          title={"Music Production"}
          icon={<MdQueueMusic size={32} />}
        />
      </div>
    </section>
  );
}

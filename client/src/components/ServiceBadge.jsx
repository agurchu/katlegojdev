import React, { useState } from "react";
import { BsBoxArrowInRight, BsCheck2Circle } from "react-icons/bs";

import { RxCross1 } from "react-icons/rx";

export default function ServiceBadge({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="service_box">
      <div className="service_icon">{item.icon}</div>
      <h2>{item.title}</h2>
      <button onClick={() => setOpen(true)} className="service_btn">
        View More{" "}
        <span>
          <BsBoxArrowInRight size={12} />
        </span>
      </button>
      {open && (
        <div className="viewMore container-px">
          <div className="viewMore_box">
            <RxCross1
              className="icon"
              size={18}
              onClick={() => setOpen(false)}
            />
            <div className="heading">
              <h3>{item.title}</h3>
              <p>{item.intro}</p>
            </div>
            <ul>
              {item.list &&
                item.list.map((list, index) => (
                  <li key={index}>
                    <BsCheck2Circle className="listicon" size={14} />
                    <span>{list}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

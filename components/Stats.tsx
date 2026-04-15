"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ target }) {

  const [count, setCount] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

  }, []);

  useEffect(() => {

    if (!visible) return;

    let start = 0;

    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {

      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }

    }, 30);

  }, [visible]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsCounter() {

  return (
    <section className="py-20 bg-gray-50">

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto text-center gap-10">

        <div>
          <h2 className="text-4xl font-bold text-[#0b1c3d]">
            <Counter target={1200}/>+
          </h2>
          <p>Published Papers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#0b1c3d]">
            <Counter target={300}/>+
          </h2>
          <p>Universities</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#0b1c3d]">
            <Counter target={27}/>+
          </h2>
          <p>Countries</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#0b1c3d]">
            <Counter target={95}/>%
          </h2>
          <p>Success Rate</p>
        </div>

      </div>

    </section>
  );
}
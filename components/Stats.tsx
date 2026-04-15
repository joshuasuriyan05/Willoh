"use client";

import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="py-20 text-center">

      <div className="grid grid-cols-3 gap-8">

        <div>
          <Counter target={1200+} />
          <p>Papers Published</p>
        </div>

        <div>
          <Counter target={300+} />
          <p>Researchers Supported</p>
        </div>

        <div>
          <Counter target={50} />
          <p>Countries Reached</p>
        </div>

      </div>

    </section>
  );
}
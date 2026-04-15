"use client";

import { Phone, User } from "lucide-react";

export default function ContactRepresentatives() {
  const contacts = [
    {
      country: "India",
      flag: "🇮🇳",
      name: "Mr. Vignesh Jayakumar",
      phone: "+916385883881",
    },
    {
      country: "Wales, UK",
      flag: "🇬🇧",
      name: "Mr. Ahil Mathivanan",
      phone: "+447768100244",
    },
    {
      country: "France",
      flag: "🇫🇷",
      name: "Mr. Arnald Russell",
      phone: "+33753755873",
    },
    {
      country: "India",
      flag: "🇮🇳",
      name: "Ms. Karen Vincent",
      phone: "+918610137239",
    },
  ];

  const defaultMessage =
    "Hello, I need assistance with research publication.";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#0b1c3d]">
          Our Global Representatives
        </h2>

        <p className="mt-4 text-gray-600">
          Reach out to our representatives directly via call or WhatsApp.
        </p>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              {/* FLAG + COUNTRY */}
              <h3 className="text-lg font-semibold">
                {contact.flag} {contact.country}
              </h3>

              {/* NAME */}
              <p className="flex items-center justify-center gap-2 mt-3 text-gray-700 text-sm">
                <User size={16} /> {contact.name}
              </p>

              {/* PHONE */}
              <p className="mt-2 text-gray-600 text-sm">
                {contact.phone}
              </p>

              {/* ACTION BUTTONS */}
              <div className="mt-5 flex gap-3 justify-center">

                {/* CALL BUTTON */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  <Phone size={16} /> Call
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  href={`https://wa.me/${contact.phone.replace("+", "")}?text=${encodeURIComponent(defaultMessage)}`}
                  target="_blank"
                  className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

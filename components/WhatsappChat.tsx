"use client";

import { useState, useEffect } from "react";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "918610137239"; // change this
  const message = "Hi! I need help with research publication.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] p-4 rounded-full shadow-lg z-50"
      >
        {/* WhatsApp Official SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="white"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.893.756 5.705 2.194 8.183L0 32l7.65-2.158a15.937 15.937 0 008.35 2.353c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.18c-2.555 0-5.06-.682-7.25-1.973l-.518-.306-4.54 1.28 1.21-4.42-.336-.54A13.22 13.22 0 012.78 16.4c0-7.3 5.93-13.23 13.22-13.23s13.22 5.93 13.22 13.23-5.93 13.23-13.22 13.23zm7.28-9.86c-.397-.198-2.347-1.158-2.71-1.29-.363-.132-.628-.198-.893.198s-1.025 1.29-1.255 1.555c-.23.264-.462.297-.86.099-.397-.198-1.676-.617-3.193-1.966-1.18-1.05-1.977-2.347-2.21-2.744-.23-.397-.025-.61.173-.808.178-.177.397-.463.595-.694.198-.23.264-.397.397-.66.132-.264.066-.496-.033-.694-.099-.198-.893-2.15-1.223-2.942-.322-.773-.65-.668-.893-.68l-.76-.014c-.264 0-.694.099-1.058.496-.363.397-1.388 1.356-1.388 3.305s1.422 3.834 1.62 4.098c.198.264 2.8 4.276 6.787 5.997.948.41 1.688.655 2.266.838.952.302 1.82.26 2.507.158.765-.114 2.347-.958 2.678-1.885.33-.926.33-1.72.23-1.885-.099-.165-.363-.264-.76-.463z"/>
        </svg>
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden z-50">

          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 font-semibold flex justify-between items-center">
            
            <div className="flex items-center gap-2">
              {/* Small WhatsApp Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="white"
              >
                <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.893.756 5.705 2.194 8.183L0 32l7.65-2.158a15.937 15.937 0 008.35 2.353c8.837 0 16-7.164 16-16S24.837.396 16 .396z"/>
              </svg>

              <span>WhatsApp Support</span>
            </div>

            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-100 space-y-3 h-[250px] overflow-y-auto">

            <div className="bg-white p-3 rounded-lg shadow text-sm">
              👋 Hello! Welcome to WILLOH Publications.
              <br />
              How can we help you with your research today?
            </div>

          </div>

          {/* Input Section */}
          <div className="flex border-t">
            <input
              type="text"
              value={message}
              readOnly
              className="flex-1 p-2 text-sm outline-none"
            />
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              className="bg-[#25D366] text-white px-4 flex items-center"
            >
              Send
            </a>
          </div>

        </div>
      )}
    </>
  );
}
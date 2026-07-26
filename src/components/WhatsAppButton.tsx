import { MessageCircle } from "lucide-react";

const PHONE = "919814130286";
const MESSAGE = "Hi, I'd like to know more about Aggarwal Industries' cultivator shovels.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle size={26} className="relative fill-white text-[#25D366]" />
    </a>
  );
}

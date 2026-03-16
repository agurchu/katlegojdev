import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatInput({ chatName }) {
  const [message, setMessage] = useState("");
  const handleSend = () => {
    // Handle send logic here
    if (!message.trim()) return; // Prevent sending empty messages
    const whatsappMessage = encodeURIComponent(
      `*From porfolio chat: ${chatName}*\n\n${message}`,
    );
    const phoneNumber = "27637342965";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
    setMessage(""); // Clear the input after sending
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="bg-[#202c33] border-t border-[#2a3942] px-4 py-3 flex items-center gap-3">
      {/* emoji picker */}
      <button className="p-2 text-[#8696a0] hover:text-[#aebac1] rounded-full hover:bg-[#2a3942] transition-colors duration-200">
        <span role="img" aria-label="smiley">
          😊
        </span>
      </button>

      {/* Input field */}
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Message about ${chatName}...`}
          className="w-full bg-[#2a3942] text-white placeholder-[#8696a0] px-5 py-3 rounded-full outline-none text-sm"
        />
      </div>
      {/* Send button */}
      <button
        onClick={handleSend}
        className={`p-2 text-[#8696a0] hover:text-[#aebac1] rounded-full hover:bg-[#2a3942] transition-colors duration-200 ${message.trim() ? "bg-[#00a884] text-black hover:bg-[#00c853] active:scale-95" : "cursor-not-allowed bg-[#2a3942] text-[#8696a0]"}`}
      >
        {/* <span role='img' aria-label='send'>📤</span> */}
        <Send size={20} />
      </button>
    </div>
  );
}

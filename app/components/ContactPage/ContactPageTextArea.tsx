export const ContactPageTextArea = () => {
  return (
    <textarea
      placeholder="Type your message here..."
      name="body"
      id="body"
      className="w-full px-4 py-2 border md:text-3xl app-scrollbar bg-black/80 border-white/50 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 rounded-3xl h-[20svh]"
    />
  );
};

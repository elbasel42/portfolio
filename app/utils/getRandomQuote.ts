export const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  { quote: "You become what you believe.", author: "Oprah Winfrey" },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen R. Covey",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  { quote: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The man who has confidence in himself gains the confidence of others.",
    author: "Hasidic Proverb",
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

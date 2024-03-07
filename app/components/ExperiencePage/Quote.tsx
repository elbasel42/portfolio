import { getRandomQuote } from "@app/utils";

export const Quote = () => {
  const { quote, author } = getRandomQuote();
  return (
    <div>
      {quote} by {author}
    </div>
  );
};

import { Globe, SlideInFromBottom } from "@app/components";
import { ContactPageForm, SocialList } from "@app/components/ContactPage";

const ContactPage = () => {
  return (
    <SlideInFromBottom>
      <Globe />
      <main className="px-4 py-4 flex">
        <SocialList />
        <ContactPageForm />
      </main>
    </SlideInFromBottom>
  );
};

export default ContactPage;

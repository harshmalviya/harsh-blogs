import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Any queries? Send it directly to me."
        />
      </Head>
      <ContactForm />
    </>
  );
}
export default ContactPage;

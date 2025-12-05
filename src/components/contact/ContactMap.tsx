import React from "react";

const ContactMap = () => {
  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9474165447195!2d-94.20539238743228!3d45.55138332749566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b45f08725a494f%3A0xd4eb1846fa713972!2s80%2037th%20Ave%20S%2C%20St%20Cloud%2C%20MN%2056301%2C%20USA!5e0!3m2!1sen!2sbd!4v1764964945885!5m2!1sen!2sbd"
          width={1900}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full apsect-5/4"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;



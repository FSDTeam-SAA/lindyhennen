import React from "react";

const ContactMap = () => {
  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9457362970847!2d-94.20539332334356!3d45.55141712761462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b45f1ce2f6912f%3A0xe3acdb3ec2cb9b29!2sLindy%20Hennen%20-%20Realtor%2C%20Central%20MN%20Realty!5e0!3m2!1sen!2sbd!4v1765055604744!5m2!1sen!2sbd"
          width="600"
          height="450"
          loading="lazy"
          className="w-full aspect-5/4 rounded-md"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;

function Contact() {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-6 pb-12">
      <h1 className="text-3xl font-bold text-center text-green-900 mb-2">Contact Us</h1>
      <div className="w-16 h-1 bg-green-700 mx-auto rounded mb-4"></div>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        We'd love to hear from you. Get in touch or come and visit us in Levenshulme.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Details */}
        <div className="flex-1 space-y-4">
          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              Nimrah Education & Community Centre
              <br />
              2 Park Grove, Levenshulme
              <br />
              Manchester M19 3AQ
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2+Park+Grove+Levenshulme+Manchester+M19+3AQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-green-800 font-semibold hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="bg-white rounded-xl shadow p-5 border-t-4 border-green-700 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600">07307 535874</p>
            <a
              href="tel:07307535874"
              className="inline-block mt-3 bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Call us
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1">
          <div className="rounded-xl shadow-lg overflow-hidden border-t-4 border-green-700 h-full min-h-[18rem]">
            <iframe
              title="Map showing Nimrah Education & Community Centre"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.1089579867676!2d-2.1922911!3d53.44863849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb30dcd2b17fd%3A0x1f2083a95e67c0b1!2sNimrah%20Education%20%26%20Community%20Centre!5e0!3m2!1sen!2suk!4v1780858848436!5m2!1sen!2suk"
              className="w-full h-full min-h-[18rem]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
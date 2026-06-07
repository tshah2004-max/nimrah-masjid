function Contact() {
  return (
  <div className="max-w-4xl mx-auto mt-10 p-6">
  <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
  <div className="flex gap-10">
    <div className="flex-1">
      <div className="bg-white shadow rounded-lg p-4">
        <p>Address: 2 Park Grove, Levenshulme, Manchester M19 3AQ</p>
        <p>Phone: 07307 535874</p>
      </div>
    </div>
    <div className="flex-1">
      <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.1089579867676!2d-2.1922911!3d53.44863849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb30dcd2b17fd%3A0x1f2083a95e67c0b1!2sNimrah%20Education%20%26%20Community%20Centre!5e0!3m2!1sen!2suk!4v1780858848436!5m2!1sen!2suk"
  className="w-full h-64 rounded-lg"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  </div>
</div>
  )
}
export default Contact
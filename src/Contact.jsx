import ContactInfo from './contactcomponent/ContactInfo';
import GoogleMap from './contactcomponent/GoogleMap';

function Contact() {
  return (
    <div className="row g-2 p-2">
      {/* CONTACTINFO COMPONENT ******************************************/}
      <ContactInfo />
      {/* CONTACTINFO COMPONENT ******************************************/}
      <GoogleMap />     

    </div>
  );
}

export default Contact;

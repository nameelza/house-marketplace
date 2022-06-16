import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Contact() {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    };
    getLandlord();
  }, [params.landlordId]);

  return (
    <div className="pageContainer">
      <header className="pageHeader">Contact Landlord</header>
      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">Contact {landlord?.name}</p>
          </div>

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <a href={`mailto:${landlord.email}?Subject=${searchParams.get("listingName")}&body=${message}}`}>
              <button type="button">Send message</button>
            </a>
          </form>
        </main>
      )}
    </div>
  );
}

export default Contact;

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

function Contact() {
  const [landlord, setLandlord] = useState(null);

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
            <p className="landlordName">Contact {landlord.name}</p>
          </div>
        </main>
      )}
    </div>
  );
}

export default Contact;

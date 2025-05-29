import emailjs from 'emailjs-com';
import { useEffect } from 'react';

const VisitorNotifier = () => {
  useEffect(() => {
    const sendVisitorRegion = async () => {
      try {
        // Use public API for basic region (no IP returned)
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        const region = data.region || "Unknown";
        const country = data.country_name || "Unknown";

        const message = `
          Visitor Alert:
          -------------------------
          Region: ${region}
          Country: ${country}
          Time: ${new Date().toLocaleString()}
        `;

        // Send with EmailJS
        await emailjs.send("service_69wo80g", "template_zki0r1s", {
          message: message,
        }, "YOUR_PUBLIC_KEY");

        console.log("Visitor region sent!");
      } catch (error) {
        console.error("Error sending visitor info:", error);
      }
    };

    // Optional: avoid duplicates using sessionStorage
    if (!sessionStorage.getItem("notified")) {
      sendVisitorRegion();
      sessionStorage.setItem("notified", "true");
    }
  }, []);

  return null;
};

export default VisitorNotifier;

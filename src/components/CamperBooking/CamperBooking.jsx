import { useState } from "react";
import css from "./CamperBooking.module.css";
import DatePicker from "react-datepicker";
import "./CamperBooking.module.css";
import "react-datepicker/dist/react-datepicker.css";
import ActionButton from "../ActionButton/ActionButton";
import { toast } from "react-hot-toast";

export default function CamperBooking() {
  const [bookingDate, setBookingDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success(`${event.target.name.value}, your booking successfully sent`);
    document.getElementById("booking-form").reset();
  };

  return (
    <div className={css.camper_booking}>
      <div className={css.camper_booking_header}>
        <p>Book your campervan now</p>
        <a>Stay connected! We are always ready to help you.</a>
      </div>
      <form onSubmit={handleSubmit} className={css.camper_booking_form} id="booking-form">
        <input type="text" placeholder="Name*" name="name" required />
        <input type="email" placeholder="Email*" name="email" required />
        <DatePicker
          selected={bookingDate}
          onChange={(date) => setBookingDate(date)}
          placeholderText="Booking date*"
        />
        <textarea placeholder="Comment" />
        <div className={css.camper_details_footer}>
          <ActionButton label="Send" />
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [persons, setPersons] =
    useState("");

  const [date, setDate] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const token =
      localStorage.getItem("token");

    await API.post(
      "/bookings",
      {
        tourId: id,
        persons,
        date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    navigate("/bookings");
  };

  return (
    <form
      className="auth-form"
      onSubmit={submitHandler}
    >
      <h2 className="">Book Tour</h2>

      <input
        type="number"
        placeholder="Persons"
        onChange={(e) =>
          setPersons(e.target.value)
        }
      />

      <input
        type="date"
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <button>
        Confirm Booking
      </button>
    </form>
  );
}

export default Booking;
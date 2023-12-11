"use client";
import DateClass from "../../lib/date";

export default function Upcoming() {
  const date = new DateClass();
  let month = date.getMonth();
  let day = date.getDayNum();
  let year = date.getYear();

  return (
    <h1 className="font-extrabold text-xl">
      {month + " " + day + ", " + year}
    </h1>
  );
}

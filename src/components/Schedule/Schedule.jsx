import React from "react";
import { RxLapTimer } from "react-icons/rx";
import "./Schedule.css";
const Schedule = () => {
  return (
    <section className="Schedule Section">
      <div className="Schedule_Content">
        <h2>Our Schedule</h2>
        <h1>Check Our Classes Schedule</h1>
        <table>
          <tr>
            <th>
              <RxLapTimer className="Timer" />
            </th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>wesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>8:00 AM</td>
            <td>
              Aerobics
              <p className="trainer">beki</p>
            </td>
            <td>
              Cardio
              <p className="trainer">beki</p>
            </td>
            <td>Boxing</td>
            <td>
              Power Yoga
              <p className="trainer">Sami</p>
            </td>
            <td>Zumba Dance</td>
            <td>Zumba Dance</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>
              Weight Lifting
              <p className="trainer">beki</p>
            </td>
            <td>Cardio</td>
            <td></td>
            <td>
              Power Yoga
              <p className="trainer">beki</p>
            </td>
            <td>Zumba Dance</td>
            <td>Zumba Dance</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Weight Lifting</td>
            <td>Cardio</td>
            <td>
              Boxing
              <p className="trainer">beki</p>
            </td>
            <td></td>
            <td>Zumba Dance</td>
            <td>Zumba Dance</td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td>Weight Lifting</td>
            <td>Cardio</td>
            <td>Boxing</td>
            <td>Power Yoga</td>
            <td></td>
            <td>
              Zumba Dance
              <p className="trainer">beki</p>
            </td>
          </tr>
          <tr>
            <td>8:00 PM</td>
            <td>Weight Lifting</td>
            <td>Cardio</td>
            <td>
              Boxing
              <p className="trainer">beki</p>
            </td>
            <td>Power Yoga</td>
            <td>
              Zumba Dance
              <p className="trainer">beki</p>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Schedule;

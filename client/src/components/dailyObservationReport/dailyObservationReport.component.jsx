import React from "react";
import RadioInput from "../formComponents/radioInput/radioInput.component";

const DailyObservationReport = () => {
  return (
    <div>
      <h2>Daily Observation Report</h2>
      <form>
        <h4>Field Training Performance Evaluation Factors</h4>

        <input type="text" name="trainerName" id="trainerName" />
        <label htmlFor="trainerName">Trainer Name</label>

        <input type="text" name="cadetName" id="cadetName" />
        <label htmlFor="cadetName">Cadet Name</label>

        <input type="text" name="startTime" id="startTime" />
        <label htmlFor="startTime">Start Time</label>

        <input type="text" name="endTime" id="endTime" />
        <label htmlFor="endTime">End Time</label>

        <RadioInput
          legend={"Scene Management"}
          description={
            "Evaluates ability to perform routine, nonstressful patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Physical Assessment"}
          description={
            "Evaluates the trainee’s ability to perform physical assessment in a noncritical patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Interview and History"}
          description={
            "Evaluates the trainee’s ability to properly interview patients/family/bystanders; to vary techniques to fit the patient being interviewed during a noncritical ALS/BLS patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"High Acuity Performance"}
          description={
            "Evaluates the trainee’s ability to properly provider assessment, interview, treatment planning, and intervention under stressful, high acuity patient contacts."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Treatment Priorities"}
          description={
            "Evaluates the trainee’s ability to properly provider assessment, interview, treatment planning, and intervention under stressful, high acuity patient contacts."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={
            "Knowledge of Departmental Patient Care Protocols and Procedures"
          }
          description={
            "Evaluates knowledge of departmental patient care protocols/procedures and the ability to apply this knowledge underfield conditions."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Knowledge of Current Medications"}
          description={
            "Evaluates the knowledge of all medications within the Cadets Scope of Practice. This includes medications carried by Orange County Emergency Medical Services as well as medications authorized by the NC Office of EMS."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Equipment Utilization and Skills"}
          description={
            "Evaluates the ability to properly use, clean,store, and maintain equipment. This includes choosing the appropriate equipment and anticipation of equipment needed for the incident. Skills can include but are not limited to IV’s, Intubation, Medication Preparation and Administration, Cardiac Monitoring, Stretcher and Stair Chair use, ALS Assistance, and any other skills."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Written Reports"}
          description={
            "Evaluates the trainee’s ability to prepare written/computerized reports accurately reflecting the situation and in a detailed, organized manner. Utilized proper grammar and spelling. Reports are completed in a timely fashion."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Electronic Operations"}
          description={
            "Evaluates the trainee’s ability to utilize the MDT (Freedom), Transmit Data and ECG’s, ESO, Operative IQ, Kronos, eSchedule, WebEOC, and other electronics as needed."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Electronic Operations"}
          description={
            "Evaluates the trainee’s ability to utilize the MDT (Freedom), Transmit Data and ECG’s, ESO, Operative IQ, Kronos, eSchedule, WebEOC, and other electronics as needed."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Appearance"}
          description={"Evaluates physical appearance and dress."}
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Acceptance of Feedback and Direction"}
          description={
            "Evaluates the way the trainee accepts criticism and how that feedback is used to further learning and improve performance."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Attitude Toward EMS Work"}
          description={
            "Evaluates how the trainee views the EMS career in terms of personal motivation, goals, and his/her acceptance of the job responsibilities."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Understanding of departmental policies and procedures"}
          description={
            "Evaluates knowledge of department policies/procedures and ability to apply this knowledge underfield conditions."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Effective Communication with Patient"}
          description={
            "Evaluates the ability to interact with patients in an appropriate and efficient manner"
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Interaction with Stakeholders"}
          description={
            "Evaluates the ability to interact with patient, families, caregivers and bystanders in an appropriate and efficient manner."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Interaction with Patients Family/caregivers or Citizens"}
          description={
            "Evaluates the ability to interact with patient, families, caregivers and bystanders in an appropriate and efficient manner."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Relationship with Peers and Other Agencies"}
          description={
            "Evaluates the ability to effectively interact with other Department members of various ranks and in various capacities as well as their ability to interact with allied agencies in various capacities."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Problem Solving and Decisions Making"}
          description={
            "Evaluates ability to identify and deal with problems, to use the most appropriate method of follow up."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Scene Safety"}
          description={
            "Evaluates ability to perform EMS related activities without placing self or others in a dangerous situation. Exposing self or others to unnecessary risk."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />
        <RadioInput
          legend={"Self-initiated Activity "}
          description={
            "Evaluates trainee’s interest and ability to take initiative and use time wisely."
          }
          values={["Acceptable", "Unacceptable", "Not Observered"]}
          className={"rating-input"}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default DailyObservationReport;

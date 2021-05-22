import React from "react";
import RadioInput from "../formComponents/radioInput/radioInput.component";

const PerformanceReport = () => {
  return (
    <div>
      <h2>Daily Observation Report</h2>
      <form>
        <h4>Field Training Performance Evaluation Factors</h4>
        <RadioInput
          legend={"Scene Management"}
          description={
            "Evaluates ability to perform routine, nonstressful patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Physical Assessment"}
          description={
            "Evaluates the trainee’s ability to perform physical assessment in a noncritical patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Interview and History"}
          description={
            "Evaluates the trainee’s ability to properly interview patients/family/bystanders; to vary techniques to fit the patient being interviewed during a noncritical ALS/BLS patient contact."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"High Acuity Performance"}
          description={
            "Evaluates the trainee’s ability to properly provider assessment, interview, treatment planning, and intervention under stressful, high acuity patient contacts."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Treatment Priorities"}
          description={
            "Evaluates the trainee’s ability to properly provider assessment, interview, treatment planning, and intervention under stressful, high acuity patient contacts."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={
            "Knowledge of Departmental Patient Care Protocols and Procedures"
          }
          description={
            "Evaluates knowledge of departmental patient care protocols/procedures and the ability to apply this knowledge underfield conditions."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Knowledge of Current Medications"}
          description={
            "Evaluates the knowledge of all medications within the Cadets Scope of Practice. This includes medications carried by Orange County Emergency Medical Services as well as medications authorized by the NC Office of EMS."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Equipment Utilization and Skills"}
          description={
            "Evaluates the ability to properly use, clean,store, and maintain equipment. This includes choosing the appropriate equipment and anticipation of equipment needed for the incident. Skills can include but are not limited to IV’s, Intubation, Medication Preparation and Administration, Cardiac Monitoring, Stretcher and Stair Chair use, ALS Assistance, and any other skills."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Written Reports"}
          description={
            "Evaluates the trainee’s ability to prepare written/computerized reports accurately reflecting the situation and in a detailed, organized manner. Utilized proper grammar and spelling. Reports are completed in a timely fashion."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <RadioInput
          legend={"Electronic Operations"}
          description={
            "Evaluates the trainee’s ability to utilize the MDT (Freedom), Transmit Data and ECG’s, ESO, Operative IQ, Kronos, eSchedule, WebEOC, and other electronics as needed."
          }
          values={[1, 2, 3, 4, 5, 6, 7, "Not Observered"]}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PerformanceReport;

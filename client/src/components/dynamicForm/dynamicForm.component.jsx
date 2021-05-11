import React from "react";

const DynamicForm = () => {
  const formJson = {
    fid: "abc123",
    title: "Daily Observation Report",
    desc: "This should be captured once per day",
    evaluations: [
      {
        title: "Student Performance",
        desc: "Rank the student performance on a scale of 1-7.",
        inputs: [
          {
            id: "",
            className: "input-radio",
            label: "1",
            type: "radio",
            name: "studentPerformance",
            value: 1,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "2",
            type: "radio",
            name: "studentPerformance",
            value: 2,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "3",
            type: "radio",
            name: "studentPerformance",
            value: 3,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "4",
            type: "radio",
            name: "studentPerformance",
            value: 4,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "5",
            type: "radio",
            name: "studentPerformance",
            value: 5,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "6",
            type: "radio",
            name: "studentPerformance",
            value: 6,
            desc: "Select the most appropriate option.",
          },
          {
            id: "",
            className: "input-radio",
            label: "7",
            type: "radio",
            name: "studentPerformance",
            value: 7,
            desc: "Select the most appropriate option.",
          },
        ],
      },
    ],
  };
  return (
    <div>
      <form>
        <h2>{formJson.title}</h2>
        {formJson.evaluations.map((evaluation) => (
          <>
            <h3>{evaluation.title}</h3>
            <p>{evaluation.desc}</p>
            {evaluation.inputs.map((input) => (
              <>
                <input id={input.id} type={input.type} />
                <label for={input.name}>{input.value}</label>
              </>
            ))}
          </>
        ))}
      </form>
    </div>
  );
};

export default DynamicForm;

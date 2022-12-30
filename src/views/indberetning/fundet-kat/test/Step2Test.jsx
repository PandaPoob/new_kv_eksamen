import StepTemplate from "./StepTemplate";

function Step2Test({ setCurrentStepIndex, onCallback }) {
  const onCallback_2 = () => {
    setCurrentStepIndex(6);
  };

  return (
    <StepTemplate
      heading={"Er katten i live?"}
      btnText_1="Ja"
      btnText_2={"Nej"}
      onCallback_1={onCallback}
      onCallback_2={onCallback_2}
    />
  );
}

export default Step2Test;

import StepTemplate from "./StepTemplate";

function Step2Test({ setCurrentStepIndex, onCallback, setSkipped }) {
  const onCallback_2 = () => {
    setSkipped(true);
    setCurrentStepIndex(5);
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

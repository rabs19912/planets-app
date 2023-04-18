import { Wrapper, StyledButton } from "./styled";

type PrevNextButtonsProps = {
  previous?: string | null;
  next?: string;
  updatePlanetsUrl: (url: string) => void;
};

function PrevNextButtons({
  previous,
  next,
  updatePlanetsUrl,
}: PrevNextButtonsProps) {
  return (
    <Wrapper>
      {previous && (
        <StyledButton onClick={() => updatePlanetsUrl(previous as string)}>previous</StyledButton>
      )}
      {next && <StyledButton onClick={() => updatePlanetsUrl(next as string)}>next</StyledButton>}
    </Wrapper>
  );
}

export { PrevNextButtons };

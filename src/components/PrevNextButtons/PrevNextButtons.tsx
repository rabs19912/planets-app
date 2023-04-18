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
      <StyledButton
        hide={Boolean(previous)}
        onClick={() => updatePlanetsUrl(previous as string)}
      >
        previous
      </StyledButton>

      <StyledButton
        hide={Boolean(next)}
        onClick={() => updatePlanetsUrl(next as string)}
      >
        next
      </StyledButton>
    </Wrapper>
  );
}

export { PrevNextButtons };

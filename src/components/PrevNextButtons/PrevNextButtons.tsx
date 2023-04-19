import { Wrapper, StyledButton } from "./styled";

type PrevNextButtonsProps = {
  previous?: string | null;
  next?: string;
  onClickPreOrNext: (url: string) => void;
};

function PrevNextButtons({
  previous,
  next,
  onClickPreOrNext,
}: PrevNextButtonsProps) {
  return (
    <Wrapper>
      <StyledButton
        hide={Boolean(previous)}
        onClick={() => onClickPreOrNext(previous as string)}
      >
        previous
      </StyledButton>

      <StyledButton
        hide={Boolean(next)}
        onClick={() => onClickPreOrNext(next as string)}
      >
        next
      </StyledButton>
    </Wrapper>
  );
}

export { PrevNextButtons };

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
    <>
      {next && <div onClick={() => updatePlanetsUrl(next as string)}>next</div>}
      {previous && (
        <div onClick={() => updatePlanetsUrl(previous as string)}>previous</div>
      )}
    </>
  );
}

export { PrevNextButtons };

# Getting Started with Planets Projects

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run the project:
### `yarn install`
then
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# CHALLENGE ANSWERS

## What's a closure? 

Is when a function can access to a variables out of its scope or context.
A closure is something we do a lot almost without wanting to do it, in the code, could be 
a lot of places where we found a close, i will leave and specific example applied to react development:

`usePlanets.tsx` line 28:
 
```
    const fetchPlanets = () => getPlanets(planetsUrl);
```

im using `planetsUrl` inside the scope of `fetchPlanets` and this var is outside of the scope of the function, in line 25:

```
const [planetsUrl, setPlanetsUrl] = React.useState<string>();
```
whole code: 
```
  const [planetsUrl, setPlanetsUrl] = React.useState<string>();
  const [planets, setPlanets] = React.useState<Planet[]>();

  const fetchPlanets = () => getPlanets(planetsUrl);
  ...
```
Other example, `PrevNextButtons.tsx` line 16:

```
<StyledButton
    hide={Boolean(previous)}
    onClick={() => updatePlanetsUrl(previous as string)}
>
...
```
In this case, in the event Listener `onclick` we are using the `previous` variable, that belongs to father`s scope, inside the event listener function scope.

## Which are the potential side-effects in any function?

Could be, when a function modify something out of it own scope, or when the function do not return nothing.
in the code, we can find some cases where a function modify an outer state of the app:

`PlanetsListView.tsx` line 37:

```
const onFilterByClimate = (event: SelectOption) => {
    setSelectedFilter(event);
    if (!event) {
      resetFilters();
      return;
    }
    filterByClimate(event?.value);
 ;
```

both `setSelectedFilter`, `resetFilter` and `filterByClimate` functions, are mutating a state outside of the scope of `onFilterByClimate`, they are a spected behavior.
to avoid side effect, is always depends the case, you can wrap in a function the mutation operation an return this one in the function. or you can create a function that modify the global state, usgin this one inside the other function.




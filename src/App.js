import React, { Profiler, useCallback, useState } from "react";
import scStyled from "styled-components";
import emotionStyled from "@emotion/styled";
import { makeStyles, styled } from "@material-ui/core/styles";
import "./styles.css";
import { Box as CBox } from "@chakra-ui/core";
import MBox from "@material-ui/core/Box";

let max = 0;
let NUM_CARDS = 100;

const ChakraContainer = ({ children }) => (
  <CBox
    border="1px dashed #ccc"
    padding="4px"
    height="150px"
    overflow="auto"
    width="120px"
  >
    {children}
  </CBox>
);

const ChakraCardContainer = ({ children }) => (
  <CBox
    border="1px solid #ccc"
    display="flex"
    marginBottom="4px"
    padding="4px"
    fontSize="12px"
  >
    {children}
  </CBox>
);
const ChakraItemOne = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="red" />
);
const ChakraItemTwo = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="orange" />
);
const ChakraItemThree = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="yellow" />
);
const ChakraItemFour = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="green" />
);
const ChakraItemFive = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="blue" />
);
const ChakraItemSix = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="violet" />
);
const ChakraItemSeven = () => (
  <CBox width="5px" height="5px" marginLeft="5px" background="pink" />
);

function Chakra() {
  return (
    <ChakraContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ChakraCardContainer key={i}>
          Card {i}
          <ChakraItemOne />
          <ChakraItemTwo />
          <ChakraItemThree />
          <ChakraItemFour />
          <ChakraItemFive />
          <ChakraItemSix />
          <ChakraItemSeven />
        </ChakraCardContainer>
      ))}
    </ChakraContainer>
  );
}

const MuiBoxContainer = ({ children }) => (
  <MBox
    border="1px dashed #ccc"
    padding="4px"
    height="150px"
    overflow="auto"
    width="120px"
  >
    {children}
  </MBox>
);

const MuiBoxCardContainer = ({ children }) => (
  <MBox
    border="1px solid #ccc"
    display="flex"
    marginBottom="4px"
    padding="4px"
    fontSize="12px"
  >
    {children}
  </MBox>
);
const MuiBoxItemOne = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="red" />
);
const MuiBoxItemTwo = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="orange" />
);
const MuiBoxItemThree = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="yellow" />
);
const MuiBoxItemFour = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="green" />
);
const MuiBoxItemFive = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="blue" />
);
const MuiBoxItemSix = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="violet" />
);
const MuiBoxItemSeven = () => (
  <MBox width="5px" height="5px" ml="5px" bgcolor="pink" />
);

function MuiBox() {
  return (
    <MuiBoxContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <MuiBoxCardContainer key={i}>
          Card {i}
          <MuiBoxItemOne />
          <MuiBoxItemTwo />
          <MuiBoxItemThree />
          <MuiBoxItemFour />
          <MuiBoxItemFive />
          <MuiBoxItemSix />
          <MuiBoxItemSeven />
        </MuiBoxCardContainer>
      ))}
    </MuiBoxContainer>
  );
}

const EmotionStyledContainer = emotionStyled.div`
  border: 1px dashed #ccc;
  padding: 4px;
  height: 150px;
  overflow: auto;
  width: 120px;
`;

const ScContainer = scStyled.div`
  border: 1px dashed #ccc;
  padding: 4px;
  height: 150px;
  overflow: auto;
  width: 120px;
`;

const StyledContainer = styled("div")({
  border: "1px dashed #ccc",
  padding: "4px",
  height: "150px",
  overflow: "auto",
  width: "120px"
});
const StyledThemeContainer = styled("div")(({ theme }) => ({
  border: "1px dashed #ccc",
  padding: "4px",
  height: "150px",
  overflow: "auto",
  width: "120px"
}));

const ScCardContainer = scStyled.div`
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 4px;
  padding: 4px;
  font-size: 12px;
`;

const EmotionStyledCardContainer = emotionStyled.div`
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 4px;
  padding: 4px;
  font-size: 12px;
`;

const StyledCardContainer = styled("div")({
  border: "1px solid #ccc",
  display: "flex",
  marginBottom: "4px",
  padding: "4px",
  fontSize: "12px"
});

const StyledThemeCardContainer = styled("div")(({ theme }) => ({
  border: "1px solid #ccc",
  display: "flex",
  marginBottom: "4px",
  padding: "4px",
  fontSize: "12px"
}));

const ScItemOne = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: red;
`;

const EmotionStyledItemOne = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: red;
`;

const StyledItemOne = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "red"
});

const StyledThemeItemOne = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "red"
}));

const ScItemTwo = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: orange;
`;

const EmotionStyledItemTwo = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: orange;
`;

const StyledItemTwo = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "orange"
});
const StyledThemeItemTwo = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "orange"
}));
const ScItemThree = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: yellow;
`;

const EmotionStyledItemThree = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: yellow;
`;

const StyledItemThree = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "yellow"
});
const StyledThemeItemThree = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "yellow"
}));
const ScItemFour = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: green;
`;
const EmotionStyledItemFour = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: green;
`;
const StyledItemFour = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "green"
});
const StyledThemeItemFour = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "green"
}));
const ScItemFive = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: blue;
`;
const EmotionStyledItemFive = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: blue;
`;
const StyledItemFive = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "blue"
});
const StyledThemeItemFive = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "blue"
}));
const ScItemSix = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: violet;
`;
const EmotionStyledItemSix = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: violet;
`;
const StyledItemSix = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "violet"
});
const StyledThemeItemSix = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "violet"
}));
const ScItemSeven = scStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: pink;
`;

const EmotionStyledItemSeven = emotionStyled.div`
width: 5px;
height: 5px;
margin-left: 5px;
background: pink;
`;

const StyledItemSeven = styled("div")({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "pink"
});
const StyledThemeItemSeven = styled("div")(({ theme }) => ({
  width: "5px",
  height: "5px",
  marginLeft: "5px",
  background: "pink"
}));

function ScTable() {
  return (
    <ScContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <ScCardContainer key={i}>
          Card {i}
          <ScItemOne />
          <ScItemTwo />
          <ScItemThree />
          <ScItemFour />
          <ScItemFive />
          <ScItemSix />
          <ScItemSeven />
        </ScCardContainer>
      ))}
    </ScContainer>
  );
}

const sharedItemStyles = {
  width: "5px",
  height: "5px",
  marginLeft: "5px"
};
const useStaticStyles = makeStyles({
  container: {
    border: "1px dashed #ccc",
    padding: "4px",
    height: "150px",
    overflow: "auto",
    width: "120px"
  },
  cardContainer: {
    border: "1px solid #ccc",
    display: "flex",
    marginBottom: "4px",
    padding: "4px",
    fontSize: "12px"
  },
  itemOne: {
    ...sharedItemStyles,
    background: "red"
  },
  itemTwo: {
    ...sharedItemStyles,
    background: "orange"
  },
  itemThree: {
    ...sharedItemStyles,
    background: "yellow"
  },
  itemFour: {
    ...sharedItemStyles,
    background: "green"
  },
  itemFive: {
    ...sharedItemStyles,
    background: "blue"
  },
  itemSix: {
    ...sharedItemStyles,
    background: "violet"
  },
  itemSeven: {
    ...sharedItemStyles,
    background: "pink"
  }
});

function MuiStaticTable(props) {
  const classes = useStaticStyles();
  return (
    <div className={classes.container}>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className={classes.cardContainer} key={i}>
          Card {i}
          <div className={classes.itemOne} />
          <div className={classes.itemTwo} />
          <div className={classes.itemThree} />
          <div className={classes.itemFour} />
          <div className={classes.itemFive} />
          <div className={classes.itemSix} />
          <div className={classes.itemSeven} />
        </div>
      ))}
    </div>
  );
}

function MuiStyledTable(props) {
  return (
    <StyledContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <StyledCardContainer key={i}>
          Card {i}
          <StyledItemOne />
          <StyledItemTwo />
          <StyledItemThree />
          <StyledItemFour />
          <StyledItemFive />
          <StyledItemSix />
          <StyledItemSeven />
        </StyledCardContainer>
      ))}
    </StyledContainer>
  );
}

function EmotionStyledTable(props) {
  return (
    <EmotionStyledContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <EmotionStyledCardContainer key={i}>
          Card {i}
          <EmotionStyledItemOne />
          <EmotionStyledItemTwo />
          <EmotionStyledItemThree />
          <EmotionStyledItemFour />
          <EmotionStyledItemFive />
          <EmotionStyledItemSix />
          <EmotionStyledItemSeven />
        </EmotionStyledCardContainer>
      ))}
    </EmotionStyledContainer>
  );
}

function MuiStyledThemeTable(props) {
  return (
    <StyledThemeContainer>
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <StyledThemeCardContainer key={i}>
          Card {i}
          <StyledThemeItemOne />
          <StyledThemeItemTwo />
          <StyledThemeItemThree />
          <StyledThemeItemFour />
          <StyledThemeItemFive />
          <StyledThemeItemSix />
          <StyledThemeItemSeven />
        </StyledThemeCardContainer>
      ))}
    </StyledThemeContainer>
  );
}

function PureCss(props) {
  return (
    <div className="container">
      {new Array(NUM_CARDS).fill(0).map((_, i) => (
        <div className="card-container" key={i}>
          Card {i}
          <div className="item-one" />
          <div className="item-two" />
          <div className="item-three" />
          <div className="item-four" />
          <div className="item-five" />
          <div className="item-six" />
          <div className="item-seven" />
        </div>
      ))}
    </div>
  );
}

function TestCase(props) {
  const { Component, name } = props;
  const [perf, setPerf] = useState(null);

  const onRender = useCallback((
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    if (phase === "mount") {
      if (baseDuration > max) {
        max = baseDuration;
      }
      setPerf(baseDuration);
    }
  }, []);

  return (
    <Profiler id={name} onRender={onRender}>
      <div className="test-case">
        <div className="name">{name}</div>
        <div className="time">
          Duration: {perf ? `${Math.round(perf * 100) / 100}ms` : ""}
        </div>
        <Component />
      </div>
    </Profiler>
  );
}

function TestSuite() {
  return (
    <div className="suite">
      <div>
        <TestCase name="MUI Box" Component={MuiBox} />
        <TestCase name="MUI styled (theme)" Component={MuiStyledThemeTable} />
        <TestCase name="MUI styled" Component={MuiStyledTable} />
        <TestCase name="Emotion styled" Component={EmotionStyledTable} />
        <TestCase name="Styled Components" Component={ScTable} />
        <TestCase name="MUI makeStyles" Component={MuiStaticTable} />
        <TestCase name="Pure CSS" Component={PureCss} />
      </div>
    </div>
  );
}

export default function App() {
  const [runCount, setRunCount] = useState(0);

  const onClickRun = useCallback(() => {
    let nextRunCount = runCount + 1;
    setRunCount(-1);
    setTimeout(() => {
      setRunCount(nextRunCount);
    }, 100);
  }, [runCount]);

  return (
    <div className="App">
      <h1>CSS-in-JS Perf Comparison</h1>
      <p>
        Renders a list of {NUM_CARDS} cards using various styling strategies,
        and uses React's &lt;Profiler&gt; component to measure render time.
      </p>
      <p>Click the button below to begin.</p>
      <button onClick={onClickRun} disabled={runCount === -1}>
        {runCount > 0 ? "Run Again" : "Run Test Suite"}
      </button>
      <br />
      <br />
      {runCount > 0 && <TestSuite key={runCount} />}
    </div>
  );
}

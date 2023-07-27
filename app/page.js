import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";
import CalcProvider from "./context/CalContext";

const btnValues = [
     ["C", "+-", "%", "/"],
     [7, 8, 9, "X"],
     [4, 5, 6, "-"],
     [1, 2, 3, "+"],
     [0, ".", "="],
];

export default function Home() {
     return (
          <CalcProvider>
               <Wrapper>
                    <Screen />
                    <ButtonBox>
                         {btnValues.flat().map((btn, index) => (
                              <Button value={btn} key={index} />
                         ))}
                    </ButtonBox>
               </Wrapper>
          </CalcProvider>
     );
}

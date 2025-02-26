import React, {useState} from "react";

function Invest() {
  const [invest, setInvest] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let principal = parseFloat(invest);
    let interestRate = parseFloat(rate) / 100;
    let target = parseFloat(goal);
    let year = 0;
    let tmpResults = [];

    while (principal < target) {
      year++;
      principal *= (1 + interestRate); 
      tmpResults.push({
        principal: principal.toFixed(0),
      });
    }

    setResult(tmpResults);
  };

  let y = 2025;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="invest">Invest</label>
        <input type="text" id="invest" value={invest} onChange={(e) => setInvest(e.target.value)}/>
        <br />
        <label htmlFor="rate">Rate</label>
        <input type="text" id="rate" value={rate} onChange={(e) => setRate(e.target.value)}/>
        <br />
        <label htmlFor="goal">Goal</label>
        <input type="text" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}/>
        <br />
        <button type="submit">Calculate</button>
      </form>

      <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invest</th>
                    <th>Rate</th>
                    <th>Result</th>
                </tr>
            </thead>

            <tbody>
                {result.map((line, index) => (
                    <tr key = {index}>
                        <td>{++y}</td>
                        <td>{invest}</td>
                        <td>{rate}</td>
                        <td>{line.principal}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invest;

import React, { useState } from 'react';

function App() {
  const [dailyWaterIntake, setDailyWaterIntake] = useState<number>();
  const [cups, setCups] = useState<number>();

  const handleCupsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cups = (event.target.value, 10);
    if (!isNaN(cups)) {
      setCups(cups);
    }
  };

  const calculateWaterIntake = () => {
    const recommendedIntake = 2.2 * 30/2; // แก้วต่อวัน
    setDailyWaterIntake(cups * recommendedIntake);
  };

  return (
    <div className="App">
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h1 className='drink-water'>{dailyWaterIntake} มล.</h1>
      <label>
        <input
          type="number"
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
          value={cups}
          onChange={handleCupsChange}

        />
      </label>
      <button onClick={calculateWaterIntake}>คำนวณ</button>
    </div>
  );
}

export default App;

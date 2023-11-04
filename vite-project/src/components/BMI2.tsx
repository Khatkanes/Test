import React, { useState } from 'react';

function App() {
  const [dailyWaterIntake, setDailyWaterIntake] = useState<number>();
  const [cups, setCups] = useState<number>();

  const calculateWaterIntake = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cups = (+event.target.value)
    setCups(cups);
    const recommendedIntake = 2.2 * 30/2; // แก้วต่อวัน
    setDailyWaterIntake(cups * recommendedIntake);
  };

  const checkMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ev = event.target.value;
    if (ev === "dark") {
      document.body.classList.add('dark-mode'); 
    } else if (ev === "light") {
      document.body.classList.remove('dark-mode'); 
  };
  return (
    <>
    <div className="App">
      <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
      <h2 className='drink-water'>{dailyWaterIntake} มล.</h2>
      <label>
        <input className='user-input'
          type="number"
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
          value={cups}
          onChange={calculateWaterIntake}
        />
      </label>
    </div>
    <label>
  <select  className='theme-btn' onChange={checkMode}>
    <option value="light" className='light-mode'>🌞Light</option>
    <option value="dark" className='dark-mode'>🌙Dark</option>
  </select>
</label>
    </>
  );
}

export default App;

import Layout from '../components/layout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import styles from '../styles/custom.module.css';
import Select from 'react-select';
import { format } from 'date-fns';

export const timeFormat = 'yyyy-MM-dd HH:mm';

export async function handleSubmit(event, startTime, endTime, areacode, setGraph) {
  event.preventDefault();
  let response = await fetch(`api/graphs?areacode=${areacode}&start=${format(startTime, timeFormat)}&end=${format(endTime, timeFormat)}`);
  let data = await response.json();
  setGraph(data);
  console.log('get graph', data);
}

export function handleChange(selectedOption) {
  setAreacode(selectedOption);
  console.log('selected', selectedOption);
}

export default function Custom() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [graph, setGraph] = useState([]);
  const options = [
    { value: 'bak', label: 'Baksidan' },
    { value: 'grg', label: 'Garaget' }
  ];
  const [selectedAreacode, setAreacode] = useState(options[0]);
  
  return <Layout>
    <div className={styles.container}>
      <form onSubmit={(event) => handleSubmit(event, startDate, endDate, selectedAreacode.value, setGraph)}>
        <div>
          <div>
            Välj startdatum
      </div>
          <div>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </div>
        </div>
        <div>
          <div>
            Välj slutdatum
        </div>
          <div>
            <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
          </div>
        </div>
        <div>
          <div>
            Välj mätpunkt
        </div>
          <div>
            <Select
              options={options}
              selected={selectedAreacode}
              onChange={handleChange}
              defaultValue={options[0]} />
          </div>
        </div>
        <div>
          <button className="btn btn-info">Hämta</button>
        </div>
      </form>
      {graph.length}
    </div>
  </Layout >
}
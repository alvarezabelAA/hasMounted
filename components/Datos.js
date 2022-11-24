
const Datos = ({datas}) => {
  const {date, states, hospitalizedCurrently, onVentilatorCurrently} = datas;
    return (
    <article className="mt-8 bg-gray-900 w-72 p-6 ml-2 rounded hover:bg-gray-700 pint ">
        <h1 className="text-indigo-600 text-xl font-bold">Historic US values COVID</h1>
        <p className="font-bold text-gray-500">States: <span className="text-white">{states}</span></p>
        <p className="font-bold text-gray-500">Date: <span className="text-white">{date}</span></p>
        <p className="font-bold text-yellow-500">Hospitalized Currently: <span className="text-white">{hospitalizedCurrently}</span></p>
        <p className="font-bold text-red-500">On Ventilator Currently: <span className="text-white">{onVentilatorCurrently}</span></p><br />
    </article>
  )
}

export default Datos
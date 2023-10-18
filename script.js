const {useState, useEffect}= React;

const CurrencyConverter = () => {
  const [rate, setRate] = useState(0.89);
  const [usd, setUsd] = useState(1);
  const [euro, setEuro] = useState(1 * 0.89);

  const toUsd = (amount, rate) => {
    return amount * (1 / rate);
  }

  const toEuro = (amount, rate) => {
    return amount * rate;
  }

  const convert = (amount, rate, equation) => {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }

  const handleUsdChange = (event) => {
    const euro = convert(event.target.value, rate, toEuro);
    setUsd(event.target.value);
    setEuro(euro);
  }

  const handleEuroChange = (event) => {
    const usd = convert(event.target.value, rate, toUsd);
    setEuro(event.target.value);
    setUsd(usd);
  }

  return (
    <div className="container">
      <div className="text-center p-3 mb-2">
        <h2 className="mb-2">Currency Converter</h2>
        <h4>USD 1 : {rate} EURO</h4>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <span className="mr-1">USD</span>
          <input value={usd} onChange={handleUsdChange} type="number" />
          <span className="mx-3">=</span>
          <input value={euro} onChange={handleEuroChange} type="number" />
          <span className="ml-1">EURO</span>
        </div>
      </div>
    </div>
  )
}



ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById('root')
  );
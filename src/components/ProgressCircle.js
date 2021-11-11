
function ProgressCircle({value}) {
  const r = 90;
  const c = Math.PI*(r*2);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const val = clamp(value, 0, 100);
  
  var pct = ((100-val)/100)*c;
  
  return (
    <div>
      <svg className="progress-circle" width="75" height="75" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle id="bar" r="90" cx="100" stroke-width="7" stroke="#eaeaea" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
        <circle r="90" cx="100" cy="100" stroke-width="7" stroke="#333" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset={pct}></circle>
      </svg>

    </div>
  )
}

ProgressCircle.defaultProps = {
  name: "",
  selection: false,
  value: 0
}

export default ProgressCircle;
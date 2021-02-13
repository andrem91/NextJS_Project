function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (Dinânico)</div>
      <div>{props.time} (Estático)</div>
    </div>
  )
}

export default Tempo;
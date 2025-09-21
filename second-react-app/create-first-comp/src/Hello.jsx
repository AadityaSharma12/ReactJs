function Hello() {

  let myName="Aaditya";
  let num=456;
  let fullName=()=>{
    return "Aaditya Sharma"
  }

  return <h3>Message no:{num} I am {fullName()}</h3>
}

export default Hello;
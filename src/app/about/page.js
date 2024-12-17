async function takeTime() {
    await new Promise((resolve)=>{
        setTimeout(resolve,3000);
    });    
}


const About = async () => {
    await takeTime();
  return (
    <div>About</div>
  )
}

export default About
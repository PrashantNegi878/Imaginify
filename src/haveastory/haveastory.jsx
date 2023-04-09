import MyNavbar from '../navbar';
import Form from 'react-bootstrap/Form';
import './haveastory.css';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import MyCorousel from '../myCorousel/myCorousel';
import { Spinner } from 'react-bootstrap';

const HaveAStory =()=> {
    const divRef = useRef();
    const [story, setStory] = useState('');
    const [result,setResult]=useState([]);
    const [display,setDisplay]=useState(false);
    // const [inputText,setInputText]=useState();
    const [button1Text,setButton1Text]=useState("Generate A Random Story");
    const [button2Text,setButton2Text]=useState("Generate Images");
    const handleChange = (event) => {
        setStory(event.target.value);
        // setInputText(event.target.value);
    };

    async function generateStory()
    {
      const generatingStory=<>Generating a Story   <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        /></>
      setButton1Text(generatingStory);
      setStory("")
      const response = await fetch("https://shortstories-api.onrender.com/");
      const responseData = await response.json();
      console.log(responseData);
      setStory(responseData.story)
      setButton1Text("Generate A Random Story");

      // setInputText(responseData.story);
      // setStory(responseData.story);
    }

    async function generateImages() {
      const generatingImages=<>Generating Images   <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        /></>
        setButton2Text(generatingImages);
        // const  output = text.split(" ");
        // console.log("prompt",line)
        const lines=story.split(".")
        const tempArr=[]
        console.log(lines)
        for(const line in lines){
        const response = await fetch(
          "https://878flash-prompthero-openjourney.hf.space/run/predict",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer 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",
            },
            method: "POST",
            body: JSON.stringify({
              data: [" mdjrny-v4 style ,8k, realistic , highly detailed, shallow depth of field ,High detail RAW color art ,diffused soft lighting ,hyperrealism, cinematic lighting, " +lines[line] ]
            }),
          }
        );
        const responseData = await response.json();
        const imgUrl =responseData.data[0];
        tempArr.push([lines[line],imgUrl])
        }
        setResult(tempArr)
        setButton2Text("Generate Images")
        divRef.current.scrollIntoView({ behavior: "smooth" });
        }

  return (
    <>
    <div className='haveatory'>
    <MyNavbar home={true} about={false}/>
    <Form >
    <h4 className='mt-3'>Generate a Story plus Images</h4><h4 className='whiteText'> or </h4><h4>Do you have a tale to tell? Create Images for it</h4>
      <Form.Group className="m-5 mt-4" controlId="exampleForm.ControlTextarea1">
        <Form.Control value={story} onChange={handleChange} className="myTextArea" as="textarea" rows={8} placeholder='Enter your Story here' />
      </Form.Group>
      <Button variant="dark" className='me-5' onClick={generateStory}>{button1Text}</Button>
      <Button variant="dark" className='ms-5' onClick={generateImages}>{button2Text}</Button>
    </Form>
     {(result.length>0)  &&<div ref={divRef}><MyCorousel  result={result} /></div> }

     </div>
    </>
    );
}

export default HaveAStory;
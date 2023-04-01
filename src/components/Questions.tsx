import Accordian from "./Accordian";
import { accordianData1, accordianData2 } from '../content';

const Questions: React.FC = () => {
  return (
    <section id="questions" className='container mx-auto py-44' >
        <div className='flex flex-col justify-center items-center'>
            <h6 className="text-sky-500 text-xl tracking-tight font-extrabold">FAQs</h6>
            <h2 className="text-white uppercase text-5xl tracking-tight font-extrabold mb-16">Frequently Asked Questions</h2>
            <div className='flex flex-wrap justify-center'>
                <div>
                {accordianData1.map((data, index) => (
                    <Accordian title={data.title} key={index} content={data.content} />
                ))}
                </div>
                <div>
                {accordianData2.map((data, index) => (
                    <Accordian title={data.title} key={index} content={data.content} />
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions;
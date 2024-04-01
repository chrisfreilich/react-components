import React from 'react'
import Badge from '../components/Badge.jsx'
import Banner from '../components/Banner.jsx'
import Toast from '../components/Toast.jsx'
import Card from '../components/Card.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Tooltip from '../components/TT.jsx'

function App() {

  const [toastInfo, setToastInfo] = React.useState(null)

  function handleToast() {
    setToastInfo({position: "lower-left", type: "neutral", title: "Oopsie!", text: "Something went horribly wrong, and crushed the computer to a pancake."})
    setTimeout(()=>setToastInfo(null), 3000)
  }

  return (
      <>
        <h1>React Simple Components Library</h1>
        <div className="specs">
          <h2>Badges</h2>
          <h3><span>&lt;Badge color="gray" shape="square"&gt;</span>Badge Text<span>&lt;/Badge&gt;</span></h3>
          <h3>Props</h3>
          <h4>color:</h4>
          <ul>
            <li><Badge color="gray" shape="square">gray</Badge></li>
            <li><Badge color="red" shape="square">red</Badge></li>
            <li><Badge color="yellow" shape="square">yellow</Badge></li>
            <li><Badge color="green" shape="square">green</Badge></li>
            <li><Badge color="blue" shape="square">blue</Badge></li>
            <li><Badge color="indigo" shape="square">indigo</Badge></li>
            <li><Badge color="purple" shape="square">purple</Badge></li>
            <li><Badge color="pink" shape="square">pink</Badge></li>
          </ul>
          <br />
          <h4>shape:</h4>
          <ul>
            <li><Badge color="indigo" shape="square">square</Badge></li>
            <li><Badge color="indigo" shape="pill">pill</Badge></li>
          </ul>
        </div>

        <div className="specs">
          <h2>Banners</h2>
          <h3><span>&lt;Banner title="Error", type="neutral"&gt;</span>(Optional) Banner Text<span>&lt;/Banner&gt;</span></h3>
          <h3>Props</h3>
          <h4>type:</h4>
          <ul>
            <li><Badge color="red" shape="square">error</Badge></li>
            <li><Badge color="yellow" shape="square">warning</Badge></li>
            <li><Badge color="green" shape="square">success</Badge></li>
            <li><Badge color="blue" shape="square">neutral</Badge></li>
          </ul>
          <br />
          <h4>title:</h4>
          <ul>
            <li>Text to appear at the top of the banner next to the icon</li>
          </ul>
          <h3>Examples</h3>
          <Banner type="error" title="Error">There is a giant problem with your application. You forgot to send the application fee. Your application has been thrown in the bin.</Banner>
          <Banner type="warning" title="Warning! Something is wrong."></Banner>
          <Banner type="neutral" title="Neutral Banner Title">
            You can put whatever you want in the banner, including images:
            &nbsp;
            <img src="/envelope.svg" alt="" />
          </Banner>
          <Banner type="success" title="You've done it!">You have completed this task. Good job!</Banner>
        </div>
       

          <div className="container">
            <button onClick={handleToast}>Click for Toast</button>
          </div>
        { toastInfo &&
          <div className="container">
            <Toast position={toastInfo.position} type={toastInfo.type} title={toastInfo.title}>{toastInfo.text}</Toast>
          </div>  
        }
        <div className="container">
          <Card title="Simple Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        </div>
        <div className="container">
          <Card title="Difficult Deployment" icon="/success.svg" bgColor='#ff3399'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        </div>
        <div class="container" style={{fontSize: "1.25rem", fontFamily: "Inter"}}>
          <Tooltip color="green">
            <Tooltip.DisplayText>
              This text has a tooltip!
            </Tooltip.DisplayText>
            <Tooltip.Popup>
              <Tooltip.PopupTitle>This is a tooltip title</Tooltip.PopupTitle>
              <Tooltip.PopupText>This is the tooltip explanatory text.</Tooltip.PopupText>
            </Tooltip.Popup>
          </Tooltip>
        </div>
        <div className="container">
          <Testimonial person={{name: "Chris Freilich", title: "Cinematographer", image: "/me.jpg"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis sint, illo quae dolorum porro eum magnam eligendi quaerat praesentium maiores nostrum, voluptas culpa velit, autem facere ex qui architecto.
          </Testimonial>
        </div>
     </>
  )
}

export default App

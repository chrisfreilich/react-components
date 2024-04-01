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
        <Badge color="purple" shape="pill">First Badge!</Badge>
        <div className="container">
          <Banner type="error" title="Fatal Error">There is a giant problem with your application. You forgot to send the application fee. Your application has been thrown in the bin.</Banner>
        </div>
        <div className="container">
          <Banner type="warning" title="Warning! Something is wrong."></Banner>
        </div>
        <div className="container">
          <Banner type="neutral" title="Available icons">
            <img src="/error.svg" alt="" />
            <img src="/warning.svg" alt="" />
            <img src="/success.svg" alt="" />
            <img src="/neutral.svg" alt="" />
          </Banner>
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

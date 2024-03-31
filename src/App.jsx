import React from 'react'
import Badge from '../components/Badge.jsx'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Tooltip from '../components/TT.jsx'
import TooltipDisplayText from '../components/TooltipDisplayText.jsx'
import TooltipPopup from '../components/TooltipPopup.jsx'
import TooltipPopupTitle from '../components/TooltipPopupTitle.jsx'
import TooltipPopupText from '../components/TooltipPopupText.jsx'

function App() {
  return (
      <>
        <Badge color="purple" shape="pill">First Badge!</Badge>
        <div class="container">
          <Banner type="error" title="Fatal Error">There is a giant problem with your application. You forgot to send the application fee. Your application has been thrown in the bin.</Banner>
        </div>
        <div class="container">
          <Banner type="warning" title="Warning! Something is wrong."></Banner>
        </div>
        <div class="container">
          <Banner type="neutral" title="Available icons">
            <img src="/error.svg" alt="" />
            <img src="/warning.svg" alt="" />
            <img src="/success.svg" alt="" />
            <img src="/neutral.svg" alt="" />
          </Banner>
        </div>
        <div class="container">
          <Card title="Simple Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        </div>
        <div class="container">
          <Card title="Difficult Deployment" icon="/success.svg" bgColor='#ff3399'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        </div>
        <div class="container" style={{fontSize: "1.5rem", fontFamily: "Inter"}}>
          <Tooltip >
            <TooltipDisplayText>
              This text has a tooltip!
            </TooltipDisplayText>
            <TooltipPopup>
              <TooltipPopupTitle>This is a tooltip title</TooltipPopupTitle>
              <TooltipPopupText>This is the tooltip explanatory text.</TooltipPopupText>
            </TooltipPopup>
          </Tooltip>
        </div>
        <div class="container">
          <Testimonial person={{name: "Chris Freilich", title: "Cinematographer", image: "/me.jpg"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis sint, illo quae dolorum porro eum magnam eligendi quaerat praesentium maiores nostrum, voluptas culpa velit, autem facere ex qui architecto.
          </Testimonial>
        </div>
     </>
  )
}

export default App

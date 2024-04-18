import React from 'react'
import Badge from '../components/Badge.jsx'
import Banner from '../components/Banner.jsx'
import Toast from '../components/Toast.jsx'
import Card from '../components/Card.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Tooltip from '../components/TT.jsx'

function App() {

  const [toastInfo, setToastInfo] = React.useState(null)

  function handleToast(info) {
    setToastInfo(info)
    setTimeout(() => setToastInfo(null), 3000)
  }

  return (
    <>
      <h1>React Simple Components Library</h1>

      {/* // BADGES */}
      <div className="specs">
        <h2>Badges</h2>
        <h3><pre><span>&lt;Badge color="gray" shape="square"&gt;</span>Badge Text<span>&lt;/Badge&gt;</span></pre></h3>
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

      {/* BANNERS */}
      <div className="specs">
        <h2>Banners</h2>
        <h3><pre><span>&lt;Banner title="Info", type="neutral"&gt;</span>(Optional) Banner Text<span>&lt;/Banner&gt;</span></pre></h3>
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

      {/* TOASTS */}
      <div className="specs">
        <h2>Toasts</h2>
        <h3><pre><span>&lt;Toast title="Error", type="neutral", position="upper-left"&gt;</span>Toast Text<span>&lt;/Toast&gt;</span></pre></h3>
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
          <li>Text to appear at the top of the toast next to the icon</li>
        </ul>
        <br />
        <h4>position:</h4>
        <ul>
          <li>upper-left, upper-right, lower-left, lower-right</li>
        </ul>
        <h3>Examples</h3>
        <div className='toast-buttons'>
          <button onClick={() => handleToast({ position: "upper-left", type: "error", title: "Fatal Error", text: "Something went horribly wrong, and crushed the computer to a pancake." })} className="error">Click for Upper-Left Error Toast</button>
          <button onClick={() => handleToast({ position: "upper-right", type: "warning", title: "Oopsie!", text: "Something seems amiss. Make sure all your doodads are plugged into the proper thingamajigs." })} className="warning">Click for Upper-Right Warning Toast</button>
          <br />
          <button onClick={() => handleToast({ position: "lower-left", type: "neutral", title: "Information", text: "Things are fine. Juuuust fine." })} className="neutral">Click for Lower-Left Neutral Toast</button>
          <button onClick={() => handleToast({ position: "lower-right", type: "success", title: "Success!", text: "Something went amazingly right. You crushed it!" })} className="success">Click for Lower-Right Success Toast</button>
        </div>
        {toastInfo &&
          <Toast position={toastInfo.position} type={toastInfo.type} title={toastInfo.title}>{toastInfo.text}</Toast>
        }
      </div>

      {/* CARDS */}
      <div className="specs">
        <h2>Cards</h2>
        <h3><pre><span>&lt;Card title, icon="/upload.png", bgColor="#3F75FE"&gt;</span>Main Card Text<span>&lt;/Card&gt;</span></pre></h3>
        <h3>Props</h3>
        <h4>title:</h4>
        <ul>
          <li>Card title text</li>
        </ul>
        <br />
        <h4>icon:</h4>
        <ul>
          <li>path to top icon</li>
        </ul>
        <br />
        <h4>bgColor:</h4>
        <ul>
          <li>background color for the icon (for images with transparent backgrounds)</li>
        </ul>
        <h3>Examples</h3>
        <div className="card-examples">
          <Card title="Simple Deployment">This methodology allows clients to make updates to data elements of the interface without assistance.</Card>
          <Card title="Robust Deployment" icon="/success.svg" bgColor='#137A2A'>This methodology ensures error-free updates to all interfaces.</Card>
          <Card title="Titanium Deployment" icon="/x.svg" bgColor='black'>This methodology is too expensive for anyone to actually implement.</Card>
        </div>
      </div>

      {/* TOOLTIPS */}
      <div className="specs">
        <h2>Tooltips</h2>
        <h3><pre><span>&lt;Tooltip color="black"&gt;<br />
          &#9;&lt;Tooltip.DisplayText&gt;</span><br />
          &#9;&#9;Tooltip Text<br /><span>
            &#9;&lt;/Tooltip.DisplayText&gt;<br />
            &#9;&lt;Tooltip.Popup&gt;<br />
            &#9;&#9;&lt;Tooltip.PopupTitle&gt;<br />
          </span>&#9;&#9;&#9;Tooltip Title<br /><span>
            &#9;&#9;&lt;/Tooltip.PopupTitle&gt;<br />
            &#9;&#9;&lt;Tooltip.PopupText&gt;<br />
          </span>&#9;&#9;&#9;Tooltip Text<br /><span>
            &#9;&#9;&lt;/Tooltip.PopupText&gt;<br />
            &#9;&lt;/Tooltip.Popup&gt;<br />
            &lt;/Tooltip&gt;</span></pre></h3>

        <h3>Props</h3>
        <h4>color:</h4>
        <ul>
          <li><Badge color="demo-white-bold">white-bold</Badge></li>
          <li><Badge color="demo-white">white</Badge></li>
          <li><Badge color="demo-blue-bold">blue-bold</Badge></li>
          <li><Badge color="demo-blue">blue</Badge></li>
          <li><Badge color="demo-purple-bold">purple-bold</Badge></li>
          <li><Badge color="demo-purple">purple</Badge></li>
          <li><Badge color="demo-green-bold">green-bold</Badge></li>
          <li><Badge color="demo-green">green</Badge></li>
        </ul>

        <h3>Example</h3>
        <Tooltip color="purple-bold" >
          <Tooltip.DisplayText>
            <div style={{ marginTop: "10px", display: "inline-block" }}>This text has a <span className='demo-purple-bold' style={{ padding: "5px" }}>purple-bold</span> tooltip! Tooltip target text can be formatted however desired.</div>
          </Tooltip.DisplayText>
          <Tooltip.Popup>
            <Tooltip.PopupTitle>This is a tooltip title</Tooltip.PopupTitle>
            <Tooltip.PopupText>This is the tooltip explanatory text.</Tooltip.PopupText>
          </Tooltip.Popup>
        </Tooltip>
      </div>

      {/* TESTIMONIALS */}
      <div className="specs">
        <h2>Testimonials</h2>
        <h3><pre><span>&lt;Testimonial name, title, image&gt;</span>Testimonial Text<span>&lt;/Testimonial&gt;</span></pre></h3>
        <h3>Props</h3>
        <h4>name:</h4>
        <ul>
          <li>Name of person quoted</li>
        </ul>
        <br />
        <h4>title:</h4>
        <ul>
          <li>Job title of person quoted</li>
        </ul>
        <br />
        <h4>image:</h4>
        <ul>
          <li>Path to image file of person being quoted</li>
        </ul>
        <br />
        <h3>Example Below (Change screen size to view mobile version)</h3>
      </div>

      <Testimonial person={{ name: "Chris Freilich", title: "Cinematographer", image: "/me.jpg" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis sint, illo quae dolorum porro eum magnam eligendi quaerat praesentium maiores nostrum, voluptas culpa velit, autem facere ex qui architecto.
      </Testimonial>

    </>
  )
}

export default App

import apiData from '../api'
import Link from './Link'

function Footer() {
  return (
    <footer 
    className="bg-tc-blue text-white py-8"
    style={{background:'linear-gradient(to left,rgb(43, 9, 54),rgb(116, 22, 144))'}}
    >
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <img src={`${apiData.imgUri}sample-bg4.png`} />
          </div>

          <div className='col-span-12 md:col-span-5  text-sm text-left'>
            <h3 className="text-xl font-bold mb-4 mt-6">Contact Us</h3>
            <p>30777 Rancho California Rd #892041</p>
            <p>Temecula, CA 92591</p>
            <p>Email: latangela@thetransformationcollective.org</p>
            <div className='subsection' style={{marginTop: '5rem'}}>
              <div>
                <h3>Customer Support</h3>
                <p>
                  Have questions or need assistance? Our dedicated
                  team is here to help you resolve any issues
                  or provide guidance. Reach out to us anytime.
                </p>
              </div>

              <div>
                <h3>Feedback and Assistance</h3>
                <p>
                  We value your input! Share your thoughts, suggestions,
                  or inquiries with us. We’re always looking to
                  improve and assist you better.
                </p>
              </div>

              <div>
                <h3>Media Inquiries</h3>
                <p>
                  For press-related questions, interviews, or
                  collaborations, our team is available to connect
                  and provide the necessary information.
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-12 md:col-span-3'>
            <h3 className="text-xl font-bold mb-4 mt-6">Quick Links</h3>
            <ul className="space-y-2  text-sm text-left">
              <li><Link to="/about" className="hover:text-tc-gold">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-tc-gold">Programs</Link></li>
              <li><Link to="/events" className="hover:text-tc-gold">Events</Link></li>
              <li><Link to="/contact" className="hover:text-tc-gold">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} The Transformation Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
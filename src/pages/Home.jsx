import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>
      <div className="text-center py-20 bg-green-50">
        <h1 className="text-4xl font-bold">Welcome to Nimrah Education and Community Center</h1>
        <p className="text-xl text-gray-600 mt-4">Nimrah Education & Communication Centre is dedicated to nurturing faith, knowledge, and community. We strive to provide a welcoming environment where individuals and families can strengthen their connection with Allah, deepen their understanding of Islam, and participate in meaningful community activities.</p>
      </div>
      <div><Carousel/></div>
      <div className="max-w-2xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <p className="mb-4 text-gray-700">Five Daily Prayers conducted in congregation.
Regular Qur'an Dars and Islamic learning sessions for spiritual growth and understanding.
Educational Programmes for children, youth, and adults.
Community Activities and Events that bring people together in faith and fellowship.
Ramadan Programmes, including congregational fasting activities, iftar gatherings, Taraweeh prayers, and special lectures.
Whether you are seeking knowledge, spiritual development, or a sense of community, Nimrah Education & Communication Centre welcomes you.
"And say, 'My Lord, increase me in knowledge.'" (Qur'an 20:114)/</p>
      </div>
    </div>
  )
}
export default Home
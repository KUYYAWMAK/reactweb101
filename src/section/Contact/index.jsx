import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div>
            <div className="flex items-end gap-4 text-2xl">Link
              <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle duration-500" icon={faSquareGithub} />
              <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle duration-500" icon={faLinkedinIn} />
              <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle duration-500" icon={faInstagram} />
          </div>
        </div>
    )
}

export default Contact
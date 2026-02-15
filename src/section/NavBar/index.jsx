import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <div className="flex items-center cursor-pointer text-primaryTitle">
        <FontAwesomeIcon className="mr-2" icon={faArrowRight} />
        About
      </div>
      <div className="cursor-pointer hover:text-primaryTitle">Experience</div>
      <div className="cursor-pointer hover:text-primaryTitle">Project</div>
      <div className="cursor-pointer hover:text-primaryTitle">Article</div>
    </div>
  )
}

export default NavBar
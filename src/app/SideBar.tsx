import { FaFire } from 'react-icons/fa'
import { IconType } from 'react-icons'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-32 m-0 flex flex-col bg-gray-100 text-white shadow-lg">
      <SideBarIcon icon={FaFire} text={"hola"}/>
    </div>
  )
}

const SideBarIcon: React.FC<{ icon: IconType, text?: String }> = (props) => (
  <div className="sidebar-icon group">
    <props.icon />
    <span className="sidebar-tooltip group-hover:opacity-100">
      {props.text}
    </span>
  </div>
)

export default SideBar
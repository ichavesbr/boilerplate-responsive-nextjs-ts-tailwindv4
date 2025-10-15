import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"

const GoToTopBtn = () => {
  const [scrollVertical, setScrollVertical] = useState(0)
  const scrollToTop = () => window.scrollTo({ top: 0 })

  // check vertical scroll
  useEffect(() => {
    const handleScroll = () => setScrollVertical(window.scrollY)
    window.addEventListener("scroll", handleScroll)
  }, [scrollVertical])

  return (
    <FontAwesomeIcon
      size="2x"
      icon={faCircleArrowUp}
      onClick={scrollToTop}
      className={`text-gray-600 fixed bottom-10 right-10 transition-opacity duration-300 cursor-pointer
        ${scrollVertical > 100 ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      // "pointer-events-none" desativa eventos de mouse quando o ícone está invisível
    />
  )
}

export default GoToTopBtn

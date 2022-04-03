import { useEffect } from "react"

export const useClickOutside = (
  showDropdown: any,
  setShowDropdown: any,
  dropdown: any,
) => {
  useEffect(() => {
    if (!showDropdown) return 
    
    function handleClick(event: any) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    window.addEventListener("mousedown", handleClick)
  
    return () => window.removeEventListener("mousedown", handleClick)
  }, [showDropdown, setShowDropdown, dropdown])
}
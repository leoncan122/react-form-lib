import React, { useState, useEffect, useRef, forwardRef, Component, Ref } from "react";
/**
 * Does stuff
 * @param {string} children - Pass a component to show `<Sticky> <button> Let's start </button> </Sticky>`.
 * @param {string} topOffset - the offset you want top have from the top screen view.  
 * @param {string} hideWhen - if need to hide element when scroll into another component pass the id of the other compo.  
 * 
 */
interface StickyProps {
    topOffset: string;
    hideWhen: string;
    children: React.ReactNode;

}
const Sticky: React.FC<StickyProps> = forwardRef(function Sticky({topOffset, hideWhen, children, ...props},ref ) {
  
  const [chatWidth, setChatWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const stickyRef: React.MutableRefObject<any>  = useRef(null);
  useEffect(() => {
    
  }, [])
  useEffect(() => {
    const element = stickyRef.current.getBoundingClientRect();
    setChatWidth(element.width);
    setSidebarTop(element.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;
    
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e: any) => {
    const element = stickyRef.current;
    const scrollTop = window.scrollY;

    let hideWhenElement = null
    let hideOffsetTop = null

    if (hideWhen) {
      hideWhenElement = document.getElementById(hideWhen)
      hideOffsetTop = hideWhenElement!.offsetTop
      console.log(hideOffsetTop)
    }

    if (element && (scrollTop >= sidebarTop! - 10)) {
      // element.classList.add('fixed-cont');
      if (hideOffsetTop && scrollTop >= hideOffsetTop ) {
        element.style.display = 'none'

      } else {
        element.style.display = 'block'
        element.style.position = 'fixed'
        element.style.top = topOffset || 0
      }
      
    } else {
      // element && element.classList.remove('fixed-cont');
      element.style.position = 'static'
      element.style.top =  0
    }
  };

  return (
        <div {...props} ref={stickyRef}>{children}</div>
      );
})

export default Sticky;

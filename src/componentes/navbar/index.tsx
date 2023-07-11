import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

// function Menu(props: any) {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="me-auto">
//         </NavbarBrand>
//         <div className='ButtonNav'>
//         <NavbarToggler onClick={toggleNavbar} className="me-2" />
//         </div>
//         <Collapse isOpen={!collapsed} navbar>
//           <div className='divNav'>
//           <Nav navbar>
//             <div>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             </div>
//             <div>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap"> GitHub </NavLink>
//             </NavItem>
//             </div>
//           </Nav>
//           </div>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Menu;
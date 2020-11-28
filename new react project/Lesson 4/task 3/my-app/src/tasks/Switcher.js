import React from 'react'
import PropTypes from 'prop-types';

// export const Switcher = (props) =>{
//     const {children, active, changeToggle} = props;
   
//     return (
//     <h2 className='switcher'> {type} : {
//         React.Children.count(children) > 0 && (
//           <>
//           {
//             React.Children.map(children, (child) =>{
//               // console.log(child.props.type, active)
//               if (React.isValidElement(child)) {
  
//                 return React.cloneElement(
//                   child,
//                     {
//                     active:  child.props.value? child.props.value === active : child.props.gender ? child.props.gender === active : child.props.layout === active,
//                     changeToggle: changeToggle(child.props.value,child.props.gender,child.props.layout),
//                     // type: child.props.children
//                     name: name
  
//                     }
//                    )
//                  }
                
          
//             })
//            }
//           </>
//          )
//         } </h2>
//        )
//       }
    
  
  export const SwitcherItem = (props) =>{
  const {children,active,changeHandler, value} = props;
  console.log(props);
  
    return (
      <button className={
        active === value ? 'switcher__item active' : "switcher__item"
      } onClick={changeHandler}
         type='button'>
        {children}
        </button>
    )
  
  }
  
//   Switcher.propTypes={
//     name: PropTypes.string.isRequired,
//     changeToggle: PropTypes.func.isRequired,
//     children: PropTypes.array,
//     active: PropTypes.string
//   }
  
  SwitcherItem.propTypes={
    changeToggle: PropTypes.func,
    children: PropTypes.array,
    active: PropTypes.string
  }
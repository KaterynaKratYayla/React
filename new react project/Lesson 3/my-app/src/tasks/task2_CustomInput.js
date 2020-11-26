import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'

/*

Задание 2:

  Написать кастомный элемент инпута.
  У компонента нужно сделать возможность настраивать:
  - type
  - placeholder
  - value
  - onChangeHandler
  - name
  - contentLength ( свойтво которое показывает счетчик сколько символов набрано в инпут)
  - contentMaxLength ( Максимальное кол-во симовлов )
  Результатом будет компонент,
  <label>
    <div>{name}</div>

    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </label>

  PropTypes:
    type: Одно из значений: text, password, number, required
    placeholder: строка
    value: строка или любой
    handler: function, required
    contentLength: bool
    contentMaxLength: number
*/

class CustomInput extends Component {
  // console.log(name)

  constructor(props){
    super (props)
    this.state = {
      inputname: ''
    }

  }

  changeHandler = e =>{
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name] : value
    });
  }

  render(){

    const {type,naming,placeholder, contentLength,contentMaxLength} = this.props;
    const {inputname} = this.state;
    const {changeHandler} = this;

  return (
       
    <div>
         <h1>Customized Inputs</h1>
         <label>
         <h3>{naming}</h3>
        <input
          type={type}
          placeholder={placeholder}
          value={inputname}  /// значение тут и в поле name должно быть одинаковое даже, если там кавычки. Плюс функцию надо прописывать в стейт, нельзя передавать в пропсах
          maxlength={contentMaxLength}
          name='inputname'
          onChange={changeHandler}
        />
      </label>
    </div>
    )
  }
}

    CustomInput.propTypes={
    placeholder: PropTypes.string,
    contentLength: PropTypes.bool,
    contentMaxLength: PropTypes.number,
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }

export default CustomInput;
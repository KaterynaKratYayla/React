import React from 'react'
import PropTypes from 'prop-types'
import './index.css'


// import './App.css'
/*

  Задание 1:

    Написать кастомный компонент переключалки, который можно будет ре-использовать в форме.
    По примеру того, что мы разобрали в аудитории.

    Результатом должен стать компонент, который принимает в себя:
    - параметры переключалки отдельными дочерними компонентами
    - активное состояние
    - name
    - action который изменяет стейт роителя
      + бонус, action должен быть универсальным для нескольких переключалок.

    У компонента должна быть проверка PropTypes
    - name: обязательное поле, строка
    - action: обязательное поле, функция
    - activeState: не обязательное поле, строка
    - children, не обязательное поле, реакт-компонент


    Тест: Добавить 2 элемента Toggler которые будут менять стейт родителя.
      Пусть это будут поля:
      gender > male,female
      layout > left, center, right, baseline

*/


export const Switcher = (props) =>{
	const {children, name, active, changeToggle} = props;

	return (
		<div className='switcher'> 
			<div>{ name } </div>:
			<div>
				{
					React.Children.count(children) > 0 && (
						<>
						{
							React.Children.map(children, (child) => {

								if (React.isValidElement(child)) {

									return React.cloneElement(
										child,
										{
											active: active === child.props.value,
											changeToggle: changeToggle( name, child.props.value ),
											name: name

										}
									)
								}
							})
						}
						</>
					)
			} 
			</div>
		</div>
	)
}
Switcher.propTypes={
	name: PropTypes.string.isRequired,
	changeToggle: PropTypes.func.isRequired,
	children: PropTypes.array,
	active: PropTypes.string
}


export const SwitcherItem = (props) => {

	const { children, active, changeToggle } = props;

	return (
		<button 
			className={ active ? 'switcher__item active' : "switcher__item"} 
			onClick={changeToggle}
			type='button'
		>
			{children}
		</button>
	)

}

SwitcherItem.propTypes={
	changeToggle: PropTypes.func.isRequired,
	children: PropTypes.any,
	active: PropTypes.string
}
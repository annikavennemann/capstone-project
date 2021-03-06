import styled from 'styled-components/macro'
import Navigation from '../Navigation/NavBar'
import { useState, useEffect } from 'react'
import { getChecklist } from '../../service/getChecklist'
import Todo from './Todo'
//import { updateChecklist } from '../../service/updateChecklist';
import Ohhhboarding from '../../images/Ohhhboarding.png'

export default function Checklist() {
  const [checklist, setChecklist] = useState([])

  console.log(checklist)

  useEffect(() => {
    getChecklist()
      .then((data) => setChecklist(data))
      .catch((error) => console.log(error))
  }, [])

  //@TODO: onClick return userChecklistItemId and new isChecked value

  // useEffect(() => {
  //     updateChecklist(checklist, checklist.id)
  //     .then((res) => console.log(res))
  // }, [checklist])

  const day = checklist.filter((checklist) =>
    checklist.category.includes('day')
  )

  const week = checklist.filter((checklist) =>
    checklist.category.includes('week')
  )

  const month = checklist.filter((checklist) =>
    checklist.category.includes('month')
  )

  const hundredDays = checklist.filter((checklist) =>
    checklist.category.includes('100days')
  )

  function toggleTodo(index) {
    const todo = checklist[index]
    setChecklist([
      ...checklist.slice(0, index),
      { ...todo, checked: !todo.checked },
      ...checklist.slice(index + 1),
    ])
  }

  return (
    <>
      <Background>
        <OhhboardingLogo src={Ohhhboarding} alt="" />
        <Headline>My Checklists</Headline>

        <Wrapper>
          <ChecklistTitle>First day</ChecklistTitle>
          {day.map(({ text, checked, id }, index) => (
            <Todo
              onToggleTodo={() => toggleTodo(index)}
              key={id}
              text={text}
              isChecked={checked}
            />
          ))}
        </Wrapper>

        <Wrapper>
          <ChecklistTitle>First Week</ChecklistTitle>
          {week.map(({ text, checked, id }, index) => (
            <Todo
              onToggleTodo={() => toggleTodo(index)}
              key={id}
              text={text}
              isChecked={checked}
            />
          ))}
        </Wrapper>

        <Wrapper>
          <ChecklistTitle>First Month</ChecklistTitle>
          {month.map(({ text, checked, id }, index) => (
            <Todo
              onToggleTodo={() => toggleTodo(index)}
              key={id}
              text={text}
              isChecked={checked}
            />
          ))}
        </Wrapper>

        <Wrapper>
          <ChecklistTitle>First 100 Days</ChecklistTitle>
          {hundredDays.map(({ text, checked, id }, index) => (
            <Todo
              onToggleTodo={() => toggleTodo(index)}
              key={id}
              text={text}
              isChecked={checked}
            />
          ))}
        </Wrapper>
      </Background>
      <Navigation />
    </>
  )
}

const Background = styled.div`
  margin-bottom: 4.5em;
  background-color: #f2f2f2;
`

const OhhboardingLogo = styled.img`
  width: 30%;
  height: auto;
  margin: 0.5em;
  float: right;
`

const Headline = styled.h2`
  margin: 0;
  padding-top: 2em;
  text-align: center;
  font-size: 24px;
  font-weight: lighter;
`
const Wrapper = styled.div`
  margin: 1.5em;
  padding: 1em;
  background: #ffffff;
  box-shadow: 15px 15px 20px #dfdfdf, -4px -4px 20px #ffffff;
  border-radius: 10px;
`

const ChecklistTitle = styled.h3`
  margin: 0 0 1em 0;
  text-align: center;
  font-size: 20px;
  font-weight: lighter;
  color: var(--ohhh-pink);
`

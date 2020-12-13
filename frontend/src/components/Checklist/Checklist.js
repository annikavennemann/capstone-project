import styled from 'styled-components/macro'
import Navigation from "../Navigation/NavBar";
import { useState, useEffect } from 'react'
import { getChecklist } from '../../service/getChecklist'

export default function Checklist() {
    const [checklist, setChecklist] = useState([])


    useEffect(() => {
        getChecklist()
        .then(data => setChecklist(data))
        .catch(error => console.log(error))
    }, [])

    const day = checklist.filter(checklist =>
        checklist.category.includes('day')
    )

    const week = checklist.filter(checklist =>
        checklist.category.includes('week')
    )

    const month = checklist.filter(checklist =>
        checklist.category.includes('month')
    )

    const hundredDays = checklist.filter(checklist =>
        checklist.category.includes('100days')
    )

    console.log(checklist)

    return (
        <>
            <Background>
                <Headline>My Checklists</Headline>
                
                <Wrapper>
                    <ChecklistTitle>First day</ChecklistTitle>
                    {day.map((item) => 
                        <Label key={item.id} > 
                            <input type="checkbox" name="item1" value={item.isChecked} />
                            <p>{item.text}</p>
                        </Label>
                    )}
                </Wrapper>

                <Wrapper>
                <ChecklistTitle>First Week</ChecklistTitle>
                {week.map((item) => 
                    <Label key={item.id} > 
                        <input type="checkbox" name="item1" value={item.isChecked} />
                        <p>{item.text}</p>
                    </Label>
                )}
                </Wrapper>
                
                <Wrapper>
                <ChecklistTitle>First Month</ChecklistTitle>
                {month.map((item) => 
                    <Label key={item.id} > 
                        <input type="checkbox" name="item1" value={item.isChecked} />
                        <p>{item.text}</p>
                    </Label>
                )}
                </Wrapper>
                
                <Wrapper>
                <ChecklistTitle>First 100 Days</ChecklistTitle>
                {hundredDays.map((item) => 
                    <Label key={item.id} > 
                        <input type="checkbox" name="item1" value={item.isChecked} />
                        <p>{item.text}</p>
                    </Label>
                )}
                </Wrapper>
            </Background>
            <Navigation />
        </>
    )
}

const Background = styled.div`
    margin-bottom: 4.5em;
    background-color: #f2f2f2
`

const Headline = styled.h2`
    margin: 0;
    padding: 1em;
    text-align: center;
    font-size: 24px;
    font-weight: lighter;
`
const Wrapper = styled.div`
    margin: 1.5em;
    padding: 1em;
    background: #ffffff;
    box-shadow:  15px 15px 20px #dfdfdf, -4px -4px 20px #ffffff;
    border-radius: 10px;
`

const ChecklistTitle = styled.h3`
    margin: 0 0 1em 0;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    color: var(--ohhh-pink)
`

const Label = styled.label`
    display: flex;
    align-items: baseline;

    p {
        margin: 0.3em 0.5em;
        padding-bottom: 0.5em;
        border-bottom: 0.5px solid #ececec;
        width: 300px;
        font-size: 16px;
    }
`
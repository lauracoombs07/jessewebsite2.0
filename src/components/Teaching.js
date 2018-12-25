import React, {Component} from "react"
import "./Teaching.css";
import { Link } from 'react-router-dom'


class Teaching extends Component { //extends power of parent React
    render() {//calling a function fruom index.js
        return(
            <div>


Northern Arizona University, English Department

ENG 220: English Grammar and Usage
ENG 420C: Corpus Linguistics
ENG 528: Grammatical Foundations
ENG 568: Corpus Linguistics and Language Teaching
ENG 698: Multivariate Statistics in Applied Linguistics
ENG 709: Programming for Corpus Linguistics
Brigham Young University, Department of Linguistics and English Language

LING 240: Linguistic Tools I (2)
LING 360: Text Processing and Analysis
LING 440: Linguistic Tools II
LING 485: Corpus Linguistics
HCOLL 110: Careers in Linguistics and English Language I
HCOLL 480R: Careers in Linguistics and English Language II
Northern Arizona University, English Department--Graduate Teaching Assistant

ENG 223: Language in the United States
ENG 205: The Academic Writer’s Workshop (4)
ENG 105: Critical Reading and Writing in the University Community (6)
ENG 100: Fundamentals in English Composition (2)
Northern Arizona University, Program in Intensive English--Graduate Teaching Assistant

Grammar
Writing Lab
Listening and Speaking
Missionary Training Center

Fijian Language (2006-2009)
            
                <h1 className ="laura">Teaching</h1>
                <Link to="/awards">Awards</Link><br/>
                <Link to="/presentations">Presentations</Link><br/>
                <Link to="/publications">Publications</Link><br/>
                <Link to="/research">Research</Link><br/>
                <Link to="/teaching">Teaching</Link><br/>
            </div>
        )
    }
}

export default Teaching;
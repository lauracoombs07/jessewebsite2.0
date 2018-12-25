import React, {Component} from "react"
import "./Presentations.css";



class Presentations extends Component { //extends power of parent React
    render() {//calling a function fruom index.js
        return(
            <div>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Presenter(s)</th>
      <th scope="col">Year</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">32</th>
      <td><b>Egbert, J.</b> & Mahlberg, M.</td>
      <td>2017</td>
      <td>"Fiction--One register or two?: Narrative and fictional speech in Dicken's novels."</td>
      <td>Paper presented at the Corpus Linguistics International Conference 2017.</td>
      <td>Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">31</th>
    <td>Gray, B. & <b>Egbert, J.</b></td>
      <td>2017</td>
      <td>“Exploring methods for evaluating corpus representativeness."</td>
      <td>Paper presented at the Corpus Linguistics International Conference 2017.</td>
      <td>Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">30</th>
    <td>Gray, B. Staples, S. & <b>Egbert, J.</b></td>
      <td>2017</td>
      <td> “Complexity in Writing Development: Untangling Two Approaches to Measuring Grammatical Complexity."</td>
      <td>Pre-conference workshop at the Corpus Linguistics International Conference 2017.</td>
      <td>Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">30</th>
    <td><b>Egbert, J.</b></td>
      <td>2016</td>
      <td> ***“Connecting Corpus linguistics and Language Assessment.”</td>
      <td>Discussant for Invited Colloquium at American Association for Applied Linguistics 2016.</td>
      <td>Orlando, FL</td>
    </tr>
    <tr>
    <th scope="row">29</th>
    <td>Decker, L., Cox, T. & <b>Egbert, J.</b></td>
      <td>2016</td>
      <td> “Effects of changing TOEFL cut-off scores: The impact of raising the bar."</td>
      <td>Paper presented at the annual conference of the American Association for Applied Linguistics 2016.</td>
      <td>Orlando, FL</td>
    </tr>
    <tr>
    <th scope="row">28</th>
    <td>Baker, P. & <b>Egbert, J.</b></td>
      <td>2015</td>
      <td> "Triangulating methodological approaches."</td>
      <td>Panel presented at Corpus Linguistics 2015.</td>
      <td> Lancaster, UK</td>
    </tr>
    <tr>
    <th scope="row">27</th>
    <td>Biber, D., <b>Egbert, J.</b> & Davies, M.</td>
      <td>2015</td>
      <td> “Effects of changing TOEFL cut-off scores: The impact of raising the bar."</td>
      <td>Paper presented at the annual conference of the American Association for Applied Linguistics 2016.</td>
      <td>Orlando, FL</td>
    </tr>
    <tr>
    <th scope="row">26</th>
    <td>Staples, S., <b>Egbert, J.</b> & LaFlair, G.</td>
      <td>2015</td>
      <td> “A Multi-Dimensional Comparison of Oral Proficiency Interviews to Conversation, Academic and Professional Spoken Registers."</td>
      <td>Paper presented at Corpus Linguistics 2015.</td>
      <td>Lancaster, UK</td>
    </tr>
    <tr>
    <th scope="row">25</th>
    <td>Davies, M. & <b>Egbert, J.</b></td>
      <td>2015</td>
      <td> “A Large Corpus-based Study of the Historical Development of [Noun+Noun] Sequences in American English.”</td>
      <td>Paper presented at the Studies in the History of the English Language Conference.</td>
      <td>Vancouver, Canada</td>
    </tr>
    <tr>
    <th scope="row">24</th>
    <td><b>Egbert, J.</b>, Biber, D., & Szmrecsanyi, B.</td>
      <td>2015</td>
      <td> “The Evolution of the English Genitive: Predicting Diachronic Change in Noun Modifier Use.”</td>
      <td>Paper presented at the Studies in the History of the English Language Conference.</td>
      <td>Vancouver, Canada</td>
    </tr>
    <tr>
    <th scope="row">23</th>
    <td><b>Egbert, J.</b></td>
      <td>2015</td>
      <td> ***“Mixed Effects Models”</td>
      <td>Workshop given at the Germanic Linguistics Annual Conference.</td>
      <td>Provo, Utah</td>
    </tr>
    <tr>
    <th scope="row">22</th>
    <td><b>Egbert, J.</b></td>
      <td>2015</td>
      <td> ***“Going Beyond p-values: Making Your Statistical Methods More Rigorous and Robust”</td>
      <td>Workshop given at the Germanic Linguistics Annual Conference.</td>
      <td>Provo, Utah</td>
    </tr>
    <tr>
    <th scope="row">21</th>
    <td>LaFlair, G. & <b>Egbert, J.</b></td>
      <td>2015</td>
      <td> “Presenting your Data with R Graphics”</td>
      <td>Workshop given at the annual conference of the American Association for Corpus Linguistics.</td>
      <td>Flagstaff, Arizona</td>
    </tr>
    <tr>
    <th scope="row">20</th>
    <td>Biber, D., <b>Egbert, J.</b> & Terblanche, L. </td>
      <td>2014</td>
      <td> “Dimensions of Variation in English Web Registers”</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics.</td>
      <td>Flagstaff, Arizona</td>
    </tr>
    <tr>
    <th scope="row">19</th>
    <td>Staples, S., <b>Egbert, J.</b>  & LaFlair, G.</td>
      <td>2014</td>
      <td> “Comparing Oral Proficiency Interviews to Academic and Professional Spoken Registers”</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics.</td>
      <td>Flagstaff, Arizona</td>
    </tr>
    <tr>
    <th scope="row">18</th>
    <td>Gray, B., Qian, M., & <b>Egbert, J.</b></td>
      <td>2014</td>
      <td> “Internal Representativeness and Specialized Corpora: The Influence of Topic on the Stability of Linguistic Findings in a Disciplinary Writing Corpus”</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics.</td>
      <td>Flagstaff, Arizona</td>
    </tr>
    <tr>
    <th scope="row">17</th>
    <td><b>Egbert, J.</b> & Plonsky, L.</td>
      <td>2014</td>
      <td> “The Linguistic and Stylistic Features of SLA Conference Abstract and Their Relationship to Ratings”</td>
      <td>Paper presented at the annual conference of the American Association for Applied Linguistics.</td>
      <td>Portland, Oregon</td>
    </tr>
    <tr>
    <th scope="row">16</th>
    <td>Plonsky, L., <b>Egbert, J.</b> & LaFlair, G. </td>
      <td>2014</td>
      <td>“Bootstrapped t-tests and ANOVAs: Using Data Reanalysis to Assess Their Potential in L2 Research”</td>
      <td>Paper presented at the annual conference of the American Association for Applied Linguistics.</td>
      <td>Portland, Oregon</td>
    </tr>
    <tr>
    <th scope="row">15</th>
    <td><b>Egbert, J.</b> & Biber, D. </td>
      <td>2014</td>
      <td>“Developing a User-based Method of Web Register Classification”</td>
      <td>Paper presented at the annual Web as Corpus workshop @Corpus Linguistics.</td>
      <td>Lancaster, UK</td>
    </tr>
    <tr>
    <th scope="row">14</th>
    <td><b>Egbert, J.</b></td>
      <td>2014</td>
      <td>“Developing a User-based Method of Web Register Classification”</td>
      <td>Paper presented at the annual Web as Corpus workshop @Corpus Linguistics.</td>
      <td>Lancaster, UK</td>
    </tr>
    <tr>
    <th scope="row">13</th>
    <td><b>Egbert, J.</b> </td>
      <td>2013</td>
      <td>“Student Perceptions of Stylistic Variation in Introductory University Textbooks”</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics</td>
      <td>San Diego, CA</td>
    </tr>
    <tr>
    <th scope="row">12</th>
    <td><b>Egbert, J.</b></td>
      <td>2012</td>
      <td>***“Multi-dimensional Analysis: An Introduction”</td>
      <td>Session taught in the Birmingham/Melbourne Summer School in Applied Linguistics</td>
      <td>University of Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">11</th>
    <td><b>Egbert, J.</b></td>
      <td>2012</td>
      <td>***“Historical Change in Genitive and Noun-Noun Use across Registers”</td>
      <td>Paper presented in the English Department Faculty Seminar</td>
      <td>University of Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">10</th>
    <td><b>Egbert, J.</b></td>
      <td>2012</td>
      <td>“Grammatical Complexity in EAP Reading Textbooks”.</td>
      <td>Public talk given in the English Department Postgraduate Speaker Series</td>
      <td>University of Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">9</th>
    <td><b>Egbert, J.</b> & Biber, D. </td>
      <td>2012</td>
      <td>“Style and Authorship in Nineteenth Century Fiction: A Multi-Dimensional Analysis”</td>
      <td>Paper accepted in the annual conference of the American Association for Applied Linguistics</td>
      <td>University of Birmingham, UK</td>
    </tr>
    <tr>
    <th scope="row">8</th>
    <td>LaFlair, G., <b>Egbert, J.</b>, & Miller, D. </td>
      <td>2012</td>
      <td>“Structural Compression and Elaboration across Levels of ESL Reading Textbook Series”</td>
      <td>Paper accepted in the annual conference of the American Association for Applied Linguistics</td>
      <td>Boston</td>
    </tr>
    <tr>
    <th scope="row">7</th>
    <td><b>Egbert, J.</b> & LaFlair, G. </td>
      <td>2012</td>
      <td>“Grammatical Complexity in ESL Reading Textbooks”</td>
      <td>Paper presented at the Northern Arizona Regional TESOL conference</td>
      <td>Flagstaff</td>
    </tr>
    <tr>
    <th scope="row">6</th>
    <td>Staples, S., <b>Egbert, J.</b> & Laird, J. </td>
      <td>2012</td>
      <td>“Variability of Lexical Bundles in the TOEFL iBT”.</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics</td>
      <td>Atlanta</td>
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>Prince, D., <b>Egbert, J.</b>  Kim, Y., & Laird, J. </td>
      <td>2012</td>
      <td>“Variability of Lexical Bundles in the TOEFL iBT”.</td>
      <td>Paper presented at the annual conference of the American Association for Corpus Linguistics</td>
      <td>New Orleans</td>
    </tr>
    <tr>
    <th scope="row">4</th>
    <td> Gray, B., Smart, J., <b>Egbert, J.</b>, Al-Surmi, M. & Poltavtchenko, E.  </td>
      <td>2011</td>
      <td>***“Corpus Linguistics”</td>
      <td>Advocacy Roundtable presentation at the annual conference of the Arizona Teachers of English to Speakers of Other Languages</td>
      <td>Phoenix</td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Prince, D., <b>Egbert, J.</b>  Kim, Y., & Laird, J. </td>
      <td>2010</td>
      <td>“Using Corpus Tools and Findings to Enhance Your Classroom”</td>
      <td>Paper presented at the annual conference of the Arizona Teachers of English to Speakers of Other Languages</td>
      <td>Phoenix</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td><b>Egbert, J.</b></td>
      <td>2009</td>
      <td>“Intergenerational Language Attitudes and Vitality: The Navajo Language Shift”</td>
      <td>Paper presented at the annual conference of the American Association for Applied Linguistics</td>
      <td>Denver</td>
    </tr>
    <tr>
    <th scope="row">1</th>
    <td><b>Egbert, J.</b></td>
      <td>2009</td>
      <td>“The Navajo Language Shift”</td>
      <td>Paper presented at the annual Utah Conference on Undergraduate Research</td>
      <td>Salt Lake City</td>
    </tr>
    
  </tbody>
</table>
            <h1 className ="laura">Presentations</h1>
            <ul>
            <li>*** = invited presentation</li>

<li>32. Egbert, J. & Mahlberg, M. (2017). “Fiction—One register or two?: Narrative and fictional speech in Dickens’s novels." Paper presented at the Corpus Linguistics International Conference 2017. Birmingham, UK.</li>

<li>31. Gray, B. & Egbert, J. (2017). “Exploring methods for evaluating corpus representativeness." Paper presented at the Corpus Linguistics International Conference 2017. Birmingham, UK.</li>

<li>30. Gray, B., Staples, S. & Egbert, J. (2017). “Complexity in Writing Development: Untangling Two Approaches to Measuring Grammatical Complexity." Pre-conference workshop at the Corpus Linguistics International Conference 2017. Birmingham, UK.</li>

<li>***30. Egbert, J. (2016). “Connecting Corpus linguistics and Language Assessment”. Discussant for Invited Colloquium at American Association for Applied Linguistics 2016. Orlando, FL.</li>

<li>29. Decker, L., Cox, T. & Egbert, J. (2016). “Effects of changing TOEFL cut-off scores: The impact of raising the bar." Paper presented at the annual conference of the American Association for Applied Linguistics 2016. Orlando, FL.</li>

<li>28. Baker, P. & Egbert, J. (2015). “Triangulating methodological approaches”. Panel presented at Corpus Linguistics 2015. Lancaster, UK.</li>

<li>27. Biber, D., Egbert, J., & Davies, M. (2015). “A linguistic taxonomy of registers on the searchable web: Distribution, linguistic descriptions, and automatic register identification”. Panel presented at Corpus Linguistics 2015. Lancaster, UK.</li>

<li>26. Staples, S., Egbert, J. & LaFlair, G. (2015). “A Multi-Dimensional Comparison of Oral Proficiency Interviews to Conversation, Academic and Professional Spoken Registers”. Paper presented at Corpus Linguistics 2015. Lancaster, UK.</li>

<li>25. Davies, M. & Egbert, J. (2015). “A Large Corpus-based Study of the Historical Development of [Noun+Noun] Sequences in American English”. Paper presented at the Studies in the History of the English Language Conference, Vancouver, Canada.</li>

<li>24. Egbert, J., Biber, D., & Szmrecsanyi, B. (2015). “The Evolution of the English Genitive: Predicting Diachronic Change in Noun Modifier Use”. Paper presented at the Studies in the History of the English Language Conference, Vancouver, Canada.</li>

<li>***23. Egbert, J. (2015). “Mixed Effects Models”. Workshop given at the Germanic Linguistics Annual Conference, Provo, UT.</li>

<li>***22. Egbert, J. (2015). “Going Beyond p-values: Making Your Statistical Methods More Rigorous and Robust”. Workshop given at the Germanic Linguistics Annual Conference, Provo, UT.</li>

<li>21. LaFlair, G. & Egbert, J. (2015). “Presenting your Data with R Graphics”. Workshop given at the annual conference of the American Association for Corpus Linguistics.</li>

<li>20. Biber, D., Egbert, J. & Terblanche, L. (2014). “Dimensions of Variation in English Web Registers”. Paper presented at the annual conference of the American Association for Corpus Linguistics, Flagstaff, AZ.</li>

<li>19. Staples, S., Egbert, J. & LaFlair, G. (2014). “Comparing Oral Proficiency Interviews to Academic and Professional Spoken Registers”. Paper presented at the annual conference of the American Association for Corpus Linguistics, Flagstaff, AZ.</li>

<li>18. Gray, B., Qian, M., & Egbert, J. (2014). “Internal Representativeness and Specialized Corpora: The Influence of Topic on the Stability of Linguistic Findings in a Disciplinary Writing Corpus”. Paper presented at the annual conference of the American Association for Corpus Linguistics, Flagstaff, AZ.</li>

<li>17. Egbert, J. & Plonsky, L. (2014). “The Linguistic and Stylistic Features of SLA Conference Abstract and Their Relationship to Ratings”. Paper presented at the annual conference of the American Association for Applied Linguistics, Portland.</li>

<li>16. Plonsky, L., Egbert, J. & LaFlair, G. (2013) “Bootstrapped t-tests and ANOVAs: Using Data Reanalysis to Assess Their Potential in L2 Research”. Paper presented at the annual conference of the American Association for Applied Linguistics, Portland.</li>

<li>15. Egbert, J. & Biber, D. (2013) “Developing a User-based Method of Web Register Classification”. Paper presented at the annual Web as Corpus workshop @Corpus Linguistics, Lancaster, UK.</li>

<li>14. Egbert, J. (2013) "Toward a Linguistic Taxonomy of English Academic Writing". Paper presented at the University of Utah Student Conference in Linguistics, Salt Lake City.</li>

<li>13. Egbert, J. (2013) “Student Perceptions of Stylistic Variation in Introductory University Textbooks”. Paper presented at the annual conference of the American Association for Corpus Linguistics, San Diego.</li>

<li>***12. Egbert, J. (2012). “Multi-dimensional Analysis: An Introduction”. Session taught in the Birmingham/Melbourne Summer School in Applied Linguistics, University of Birmingham.</li>

<li>***11. Egbert, J. (2012). “Historical Change in Genitive and Noun-Noun Use across Registers”. Paper presented in the English Department Faculty Seminar, University of Birmingham.</li>

<li>***10. Egbert, J. (2012). “Grammatical Complexity in EAP Reading Textbooks”. Public talk given in the English Department Postgraduate Speaker Series, University of Birmingham.</li>

<li>9. Egbert, J. & Biber, D. (2012). “Style and Authorship in Nineteenth Century Fiction: A Multi-Dimensional Analysis”. Paper accepted in the annual conference of the American Association for Applied Linguistics, Boston.</li>

<li>8. LaFlair, G., Egbert, J., & Miller, D. (2012). “Structural Compression and Elaboration across Levels of ESL Reading Textbook Series”. Paper accepted in the annual conference of the American Association for Applied Linguistics, Boston.</li>

<li>7. Egbert, J. & LaFlair, G. (2012). “Grammatical Complexity in ESL Reading Textbooks”. Paper presented at the Northern Arizona Regional TESOL conference, Flagstaff.</li>

<li>6. Staples, S., Egbert, J. & Laird, J. (2011). “Variability of Lexical Bundles in the TOEFL iBT”. Paper presented at the annual conference of the American Association for Corpus Linguistics, Atlanta.</li>

<li>5. Prince, D., Egbert, J., Kim, Y. & Laird, J. (2011). “Using Corpus Tools and Websites to Enhance the Language Classroom”. Paper presented at the annual convention of Teachers of English to Speakers of Other Languages, New Orleans.</li>

<li>***4. Gray, B., Smart, J., Egbert, J., Al-Surmi, M. & Poltavtchenko, E. (2010). “Corpus Linguistics”. Advocacy Roundtable presentation at the annual conference of the Arizona Teachers of English to Speakers of Other Languages, Phoenix.</li>

<li>3. Prince, D., Egbert, J., Kim, Y. & Laird, J. (2010). “Using Corpus Tools and Findings to Enhance Your Classroom”. Paper presented at the annual conference of the Arizona Teachers of English to Speakers of Other Languages, Phoenix.</li>

<li>2. Egbert, J. (2009). “Intergenerational Language Attitudes and Vitality: The Navajo Language Shift”. Paper presented at the annual conference of the American Association for Applied Linguistics, Denver.</li>

<li>1. Egbert, J. (2009). “The Navajo Language Shift”. Paper presented at the annual Utah Conference on Undergraduate Research, Salt Lake City.</li>

</ul>
        
                {/* <Link to="/awards">Awards</Link><br/>
                <Link to="/presentations">Presentations</Link><br/>
                <Link to="/publications">Publications</Link><br/>
                <Link to="/research">Research</Link><br/>
                <Link to="/teaching">Teaching</Link><br/> */}

            
            </div>
        )
    }
}

export default Presentations;
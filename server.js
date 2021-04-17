const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080
const faq = [
    {
        question: "Why can’t the parents just read the question and answer like a survey?",
        answer: "Getting the information from the Family Map is only a small part of the reason to use it. Conducting the interview allows you to connect to the family and start a real partnership – a conversation."
    },
    {
        question: "Who should conduct the interview with the Family Map?",
        answer: "The Family Map Inventories were developed to be conducted by the educator that spends the most time with the child in center-based programs or the assigned visitor in home visiting programs. The interview can also be conducted by a family services specialist who then shares the information with the educational team."
    },
    {
        question: " Who should be interviewed with the Family Map?",
        answer: "The interview should be conducted with the person who spends the most time caring for the child. The child should also be at the interview. Welcome any other adults who help take care of the child.",
    },
    {
        question: "How often should we do the Family Map interview?",
        answer: "We recommend that the Family Map interview be conducted twice a year. This allows programs to document the services they provide and gauge progress. We have worked with programs that show reductions in risks from fall to spring of a program year. We know family risks and strengths can change quickly. We have found that new risks are identified in the second interview and you’ll note some risks that have resolved.",
    },
    {
        question: "Should we do the Family Map at the enrollment conference?",
        answer: "The Family Map has most often been used at home visits after the family/child have been in the program for a few weeks. However, some programs use it at enrollment and report to us that they are happy with the result. Some programs choose to break up the interview over 2-3 short meetings with the parent starting at enrollment."
    },
    {
        question: "How much time will it take to use the Family Map?",
        answer: "Typically, the Family Map Interview takes 30-45 minutes to complete."
    },
    {
        question: "What other training or policy should my agency consider when we start the Family Map?",
        answer: "Review the topics in the Family Map to identify referral options and community resources your interviewers will likely need. Review your agency policy and protocols on confidentiality and mandatory reporting. In rare cases, the Family Map interview could identify child abuse, domestic violence or mental health issues."
    },
    {
        question: "What is the cost of training for my program?",
        answer: "The cost of training includes the implementation consult, education, support materials, and technical support. This is a one-time fee due at the initiation of service. The annual license provides access to the Family Map interview portal; this fee will be billed each year prior to your anniversary date. The cost of the license fee is based on the number of children your program serves."
    },
    {
        question: "Where are trainings held? How long does it take to get trained?",
        answer: "Training in the use of the Family Map and the best practices in family engagement takes 4-6 hours depending on the group size. This is delivered in a live, virtual training over 2-3 sessions including a practice session. Most programs host private training sessions for their staff at a time scheduled to meet your needs. If you have a very small number of staff to train, we can suggest one of our open, group sessions."
    }
]




app.use('/assets', express.static('src/assets'));
app.set('view engine', 'ejs');
// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about', { faq });
});
app.get('/resources', function (req, res) {
    res.render('resources');
});



app.listen(port, () => console.log(`listening on port ${port}!`));
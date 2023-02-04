alert ("Welcome to our quiz portal");
var matricNo = prompt ("Enter your name");
alert ("You are welcome, " + matricNo);


var pos = 0,
 test, test_status, questions,
 choice, choices, chA, chB, chC,
 correct = 0;

var questions = [

 ["Who was the first student to join choir unit in the chapter history?",
  "Abiodun Oluwafemi",
  "Adelaja Tobi",
  "Babalola Adeboye", "A"
 ],

 ["In which year did ESMKP have its first musical keyboard?",
  "2002", "2004", "2006", "B"
 ],

 ["What is the name of the chorister that first led praise and worship?",
  "Babajide Olugbenga", "Abiodun Folakemi",
  "Ajao Taiwo", "A",
 ],

 ["What is the title of the first choir ministration in the fellowship?",
  "Yahooze",
  "Who wants to be a millionaire",
  "Imole de", "B",
 ],

 ["Who preached during the first choir concert?",
  "Bro Gbile Akani", "Blessing Oyedamola",
  "Arome Osayi", "A"
 ],

 ["How many members had the first tenure choir unit?",
  "10.5", "30",
  "-10", "B"
 ],

 ["Another name for choir unit ESMKP is",
  "Akorin ogo", "Sunrise Voices",
  "The Scorpions", "B"
 ],

 ["Who was the first ever choir member to sing off-key?",
  "Olubisi Dolapo", "Juju Olawobi",
  "Abiodun John",
  "A"
 ],

 ["How many keys altogether are on the church keyboard?",
  "60", "100",
  "2037", "A"
 ],

 ["Who is the thinnest, most slender, leanest choir member?",
  "Abiodun Folakemi", "Adelaja Tobi",
  "I can't say oo", "A"
 ],

 ["Who is the most disturbing choir member?",
  "Baba Orga", "Zonal DME",
  "Iya Eva", "A"
 ],

 ["Who, among these people, is a partial choir member?",
  "Baba Drama",
  "Iya Bible", "Mr President",
  "A"
 ],

 ["How many languages does the CM speak?",
  "Three",
  "Four",
  "Twenty", "B"
 ],

 ["Who is the sworn enemy of the CM?",
  "Baba Prayer", "Iya Usher",
  "Pastor Noah", "B"
 ],

 ["What is the nickname of the CM?",
  "Phenomenal",
  "Odogwu", "Baba Orin",
  "A"
 ],

 ["What is the vocal range of the present CM?",
  "Tenor",
  "Baritone", "We don't even know", "B"
 ],

 ["Who was the first student to skip a choir rehearsal?",
  "Adeyemo Oluwasegun",
  "Joel Akande", "Abiodun Folakemi", "C"
 ],

 ["Who is the present CM musical role model",
  "Portable", "Kizz Daniel", "Ebenezer Obey",
  "C"
 ],

 ["Who is the secret fiancee of the CM Abiodun Joseph Ojo?",
  "Agim Esther",
  "Philip Boluwatife", "Julius John Kehinde", "A"
 ],

 ["Do you have a secret crush on the current CM?",
  "Yes", "Yes",
  "I'm male", "C"
 ]

];

function _(x) {

 return document.getElementById(x);

}

function renderQuestion() {

 test = _("test");

 if (pos >= questions.length) {

  test.innerHTML = "<h3>You got " +
   correct + " out of " + questions
   .length +
   " questions correct. <br>SEE YOUR LIFE...AFI OUNJE </h3>";

  _("test_status").innerHTML =
   "Exam Completed";

  pos = 0;

  correct = 0;

  return false;

 }

 _("test_status").innerHTML =
  "Question " + (pos + 1) + " of " +
  questions.length;

 question = questions[pos][0];

 chA = questions[pos][1];

 chB = questions[pos][2];

 chC = questions[pos][3];





 test.innerHTML = "<h3>" + question +
  "</h3>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='A'> " +
  chA + "<br>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='B'> " +
  chB + "<br>";

 test.innerHTML +=
  "<input type='radio' name='choices' value='C'> " +
  chC + "<br><br>";



 test.innerHTML +=
  "<button onclick='checkAnswer()'>Submit Answer</button>";

}

function checkAnswer() {

 choices = document
  .getElementsByName("choices");

 for (var i = 0; i < choices
  .length; i++) {

  if (choices[i].checked) {

   choice = choices[i].value;

  }

 }

 if (choice == questions[pos][4]) {

  correct++;

 }

 pos++;

 renderQuestion();

}

window.addEventListener("load",
 renderQuestion, false);
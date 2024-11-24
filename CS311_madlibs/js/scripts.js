
/*
*This code creates the madlib itself with user input as well as creates the
*processes needed for the reset feature.
*/
document.getElementById('generate').addEventListener('click', function () 
{
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
    const word3 = document.getElementById('word3').value;
    const word4 = document.getElementById('word4').value;
    const word5 = document.getElementById('word5').value;
    const word6 = document.getElementById('word6').value;
    const word7 = document.getElementById('word7').value;
    const word8 = document.getElementById('word8').value;
    const word9 = document.getElementById('word9').value;
    const word10 = document.getElementById('word10').value;
    const word11 = document.getElementById('word11').value;
    const word12 = document.getElementById('word12').value;
    /*
    *Task: creates the madlib structure and uses interpolation to 
    *fit the words into a paragraph.
    *@return: a paragraph displaying user-input from previous action.
    */
    const madlib = `Our protagonist loves to ${word1} especially with a ${word2}, but hates to ${word3} with 
     ${word4} ${word5}. When our protagonist is feeling ${word6}, they buy a single ${word7} ${word8} that 
     ${word9}s. There's a large ${word10} in their room! When it's ${word11}, they like to ${word12} in the ${word10}`;

    document.getElementById('madlib-result').textContent = madlib;
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('output-section').style.display = 'block';
}
);
/*
*Task: creates a reset button that restarts the madlib from the first, fill-in-the-blank section.
*/
document.getElementById('reset').addEventListener('click', function () 
{
    document.getElementById('madlibs-form').reset();
    document.getElementById('input-section').style.display = 'block';
    document.getElementById('output-section').style.display = 'none';
}
);

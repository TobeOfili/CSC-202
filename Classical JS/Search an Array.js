var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript']; 
    console.log(languages.indexOf('JavaScript')); //This should output 1
    //To return all occurrences, loop, indicating start Index each time, as we did for strings var searchTerm = 'JavaScript';
    var matchIndex;
    var startIndex = 0; //start from the beginning
    while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found console.log(matchIndex); //Output the index of match
    startIndex = matchIndex + 1; //change search start position to beyond the last match index
    }
//  ++++++++++++++++++++++++++++++++++++++++ DOM Selector  ++++++++++++++++++++++++++++++++++++

// Open Our file 02_Practice-Block.html and open inspect and Run code


// find content throw Id, Class :-
            document.getElementById('hello').id
            document.getElementsById('link').className

// Find Id and class using getAttribute() :-
            document.getElementById('hello').getAttribute('id')
            document.getElementById('link').getAttribute('class')

// Change the class or id name :-
            document.getElementById('link').setAttribute('class' , 'mylinks')

// id, class store in one variable :-
            document.getElementById('hello')
            var hello =  document.getElementById('hello')

    // Then make this content to style ===
                hello.style.backgroundColor = "pink"
                hello.style.textAlign= "center" 
            

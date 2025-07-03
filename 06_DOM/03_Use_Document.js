           
           // +++++++++++++++++++++++++++  1.]  Work With Document ++++++++++++++++++++++++++++++


// Open Our file 02_Practice-Block.html and open inspect and Run code
            // OR....
// Open any website Like Wikipedia[Gujrat] and open inspect write below codes


// 1.] Use All element in website check in inspect console screen :---------------
            console.log(window.document);
                        // OR
            console.log(document);
                        // OR
            console.dir(document);


// 2.] Find All Link in the website Write :--------------------
            console.log(document.links);
            // Find specefic link
            console.log(document.links[0]);


// 3.] Find content using specific Id  :-----------------
            document.getElementById('hello');  //siteSub  is Id
        
            
// 4.] Change Website Content :-------------
            document.getElementById('hello').innerHTML = "Ishika"
                        //  firstHeading is Id 
                        // Change Content Gujrat--> Ishika

            
            

            
            
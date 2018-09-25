var post1 = document.getElementById("post1_img");
var post3 = document.getElementById("post3_img");
var post6 = document.getElementById("post6_img");

// Set counters for 3 posts
var post1_counter = 0;
var post3_counter = 0;
var post6_counter = 0;

// Set interval for 3 posts
var interval1 = setInterval(post1Cycle, createRandomNumber());
var interval3 = setInterval(post3Cycle, createRandomNumber());
var interval6 = setInterval(post6Cycle, createRandomNumber());

// Set 3 buttons
var p1btn = document.getElementById("post1_btn");
var p3btn = document.getElementById("post3_btn");
var p6btn = document.getElementById("post6_btn");

// Set of images for post1
var post1_imgs = ["https://365thingsinhouston.com/wp-content/uploads/2013/09/bayou-bucket-tickets-2013-houston-cougars-rice-owls-uh-vs-rice-696x465.jpg",
                    "http://www4.pictures.zimbio.com/gi/Justin+Bickham+Houston+vs+Rice+hu4KsmTPO0Il.jpg",
                    "https://usatftw.files.wordpress.com/2015/08/xxx__rice_football_6307_75088902.jpg?w=1000&h=600&crop=1"
                 ];
// Set of images for post3
var post3_imgs = ["https://y4j7y8s9.ssl.hwcdn.net/wp-content/uploads/2016/12/rockets-logo-1.jpg",
                    "https://i.ytimg.com/vi/_lk23LWO45Y/maxresdefault.jpg",
                    "https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/08/ryan_anderson_marquese_chriss_trade.jpg",
                    "https://clutchpoints.com/wp-content/uploads/2018/08/Rockets-Brandon-Knight-Ryan-Anderson.jpg",
                 ];
//Set of images for post6
var post6_imgs = ["https://tribkiah.files.wordpress.com/2014/05/texans.jpg?quality=85&strip=all&w=400&h=225&crop=1",
                    "https://s.hdnux.com/photos/71/11/42/14981299/3/920x920.jpg", 
                    "https://www.nrgpark.com/wp-content/uploads/poster-nrg-facilities.jpg"
                 ];

// When onload page show images
window.onload = function(){ 
    //startCycle(post1Cycle);
}

// When clicked post1 button
p1btn.onclick = function(){
    if(p1btn.value == "STOP"){
        p1btn.value = "START";
        clearInterval(interval1);
    }
    else if(p1btn.value == "START"){
        p1btn.value = "STOP";
        // Restart interval 
        interval1 = setInterval(post1Cycle, createRandomNumber()); 
    }
}

// When clicked post3 button
p3btn.onclick = function(){
    if(p3btn.value == "STOP"){
        p3btn.value = "START";
        clearInterval(interval3);
    }
    else if(p3btn.value == "START"){
        p3btn.value = "STOP";
        // Restart interval 
        interval3 = setInterval(post3Cycle, createRandomNumber()); 
    }
}

// When clicked post6 button
p6btn.onclick = function(){
    if(p6btn.value == "STOP"){
        p6btn.value = "START";
        clearInterval(interval6);
    }
    else if(p6btn.value == "START"){
        p6btn.value = "STOP";
        // Restart interval 
        interval6 = setInterval(post6Cycle, createRandomNumber()); 
    }
}

/*
@startCycle(post)
Set interval with parameters
*/
function startCycle(post){
    setInterval(post, createRandomNumber());
}

/*
@post1Cycle()
Cycle images for post1
*/
function post1Cycle(){
    post1_counter++;
    if(post1_counter == post1_imgs.length){
        post1_counter = 0;
    }
    post1.src = post1_imgs[post1_counter];
}

/*
@post3Cycle()
Cycle images for post3
*/
function post3Cycle(){
    post3_counter++;
    if(post3_counter == post3_imgs.length){
        post3_counter = 0;
    }
    post3.src = post3_imgs[post3_counter];
}

/*
@post6Cycle()
Cycle images for post6
*/
function post6Cycle(){
    post6_counter++;
    if(post6_counter == post6_imgs.length){
        post6_counter = 0;
    }
    post6.src = post6_imgs[post6_counter];
}

/*
@createRandomNumber()
random a number between 1-5
*/
function createRandomNumber(){
    // Range is 1 - 5
    var randomNum = Math.random();
    var num = 1000 * parseInt(randomNum * 5 + 1);
    return num;
}
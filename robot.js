/*  This is an algorithm given as an interview question for a software dev position at 
    Google that a previous student showed me
              >___0___<                                            >___0___<
....___________|_____|______________________________________________|_____|______________________....
                  P                                                    P
Scientists at NASA have opened a portal to another dimension. In this dimension, the plane of existence
is just an infinitely long line. To take readings, the scientists have sent 2 robots through the portal.
The two robots parachute down, but the trip through the portal sent them to entirely different locations.
Physics is also weird in this dimension, so when they parachute down, they also land directly on top of their
parachutes.
The key problem is that both robots have the SAME program written to power them. Given the following functions,
what code can you write to guarantee that eventually, the two robots will meet each other. You are not STRICTLY limited
to these functions, so you can use additional variables, while loops, conditionals and such in combination with 
these functions.
**** Predefined functions, you do not need to write anything. These are just the methods available for use **** */
function moveLeft() {
    // This function takes one unit of time, and moves the robot to the left one unit of distance.
}

function moveRight() {
    // This function takes one unit of time, and moves the robot to the right one unit of distance.
}

function wait() {
    // This function involves no movement of the robot and takes one unit of time.
}

function parachuteCheck() {
    // This function returns a boolean based on whether or not the robot is currently situated on top of a parachute
}

function robotCheck() {
    // This function returns a boolean based on whether or not the robot has met another robot
}

// *******************************************************************************************************

//PLAN OF ACTION:
//1) Both robots LAND at individual locations.
//   a) each robot does a "self check" 
//   b) checks for "other robot" - (IF NO OTHER ROBOT --THEN executes SET wait time)
//   c)  waits set time (WE NEED TO DEFINE THAT TIME)
//   d)  after wait -- executes (MOVE OR RIGHT for a SET time --EX:  move until count reaches 2000)
//   e)  after reaching (COUNT LIMIT) - return to origin (OWN PARACHUTE)
//   f)  once reaches own parachute - conducts (a, b, c)
//   g)  EXECUTEs mOVE --same direction as before but DOUBLE TIME -- 
//   h)  returns to origin onces reaches COUNT LIMIT--
//   i)  THIS REPEATS UNTIL ROBOT FINDS ANOTHER PARACHUTE.  Once robot finds another parachute -- IT STOPs. but the OTHER one continues until it finds 2nd robot.
function robotCode() {
    var time = 10
    var wait = time * 2


    while (robotCheck + parachuteCheck) {
        robotcheck =
            //(b)
    }
    //(d)
    moveLeft() = time
        //(f)
    parachuteCheck()
        //(g)

    if parachuteCheck() = true
    wait() + robotCheck()
    else moveRight() = time
    time * 2




}

// alt//
function robotCodeSol1() {
    let chuteFound = false;
    do {
        moveLeft();
        if(parachuteCheck())
            chuteFound = true;
        if(chuteFound) {
            moveLeft();
        }
        else {
            wait();
        }
    }
    while(!robotCheck())
    return true;
}

function robotCodeSol2() {
    moveRight();
    let stepCount = 2;
    let chuteCount = 0;

    while(!robotCheck()){
        for(let i = 0; i < stepCount; i++) {
            moveLeft();
            if(parachuteCheck()){
                chuteCount++;
                if(chuteCount == 2)
                    break;
            }
            if(robotCheck()){
                return true;
            }
        }
        if(chuteCount == 2){
            break;
        }
        chuteCount = 0;
        stepCount++;
        for(let i = 0; i < stepCount; i++) {
            moveRight();
            if(parachuteCheck()){
                chuteCount++;
                if(chuteCount == 2)
                    break;
            }
            if(robotCheck()) {
                return true;
            }
        }
        stepcount++;
        chuteCount = 0;
    }

    while(!robotCheck()){
        wait();
    }
    return
}
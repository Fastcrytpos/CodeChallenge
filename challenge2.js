function speedDetector(speed) {
    const speedLimit = 70;
    //check if speed input is less than 80
    if (speed <= speedLimit) {
        console.log("Ok");
        return "Ok";

    }else if (speed > speedLimit) {
        const excessSpeed = speed - speedLimit;
        const points = excessSpeed/5;
        //check if points is greater or less than 12
        if (points > 12) {
            console.log('License suspended!!');
            return 'License suspended!!';
        } else {
            console.log(points);
            return "you are currently fucking up with: ",points," points above limit";
        }
    }else {
        console.log('Warning: Please input a number');
        return 'Warning: Please input a number';
    }
}

//speedDetector(800);

//let hung = 0;

document.getElementById("mysobmit").onclick = function(){
  speed = parseFloat(document.getElementById("mytoxt").value); // Parse input as a number
  console.log("mytOxt", speed);
  document.getElementById("onswer").textContent = 'Your current speed is: '+speed+' \n ' +speedDetector(speed);
};
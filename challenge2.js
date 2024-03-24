function speedDetector(speedInput) {
    const speedLimit = 70;
    //check if speed input is less than 80
    if (speedInput <= speedLimit) {
        console.log("Ok");

    }else if (speedInput > speedLimit) {
        const excessSpeed = speedInput - speedLimit;
        const points = excessSpeed/5;
        //check if points is greater or less than 12
        if (points > 12) {
            console.log('License suspended!!');
        } else {
            console.log(Points);
        }
    }else {
        console.log('Warning: Please input a number');
    }
}

speedDetector(80);
// for
for (let i=0;i<=10;i++){
    const element = i;
    console.log(element);
}
// console.log(element); (Out of scope)

for (let i=0; i<=10; i++){
    const element1 = i;
    if(element1 == 5){
        console.log("5 is best number");
    }
    console.log(element1);
}

for (let i=0; i<=10;i++){
    console.log(`Outer loop value : ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`)
    }
}

for (let i=0; i<=10; i++){
    console.log(`Outer loop value : ${i}`)
    for (let j=0; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
    // for(let j=1; j<=10; j++){
    //     console.log(i + '*' + j + '=' + i*j);
    //}
}


let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++){
    const element2 = myArray[index];
    console.log(element2);
}

// break and continue
for (let index = 1; index<=20; index++){
    if(index==5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index<=20; index++){
    if(index==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}
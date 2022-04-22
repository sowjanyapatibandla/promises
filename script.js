console.log("working");

//Q.1Write one example explaining how you can write a callback function ?
//Q.5Create examples to explain callback function
const element1 = (fname)=>{
  console.log("What is your first name?",fname);
};
const greeting =(Name,callbackFunction)=>{
  callbackFunction(Name);
};
greeting("sowjanya",element1)


//Q.2"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

//Q.6 Create examples to explain callback hell function

const getnumbers = () =>{
  console.log("Printing the number");
  setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
      console.log("2");
      setTimeout(()=>{
        console.log("3");
        setTimeout(()=>{
          console.log("4");
          setTimeout(()=>{
            console.log("5");
            setTimeout(()=>{
              console.log("6");
              setTimeout(()=>{
                console.log("7");
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
}
getnumbers();

// Q.3"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

//Q.7Create examples to explain promises function

let promise = new Promise((resolve,reject)=>{
  resolve();
})
promise.then(()=>{
  setTimeout(()=>{
    console.log("1");
  },1000);
}).then(()=>{
  setTimeout(()=>{
    console.log("2");
  },2000);
}).then(()=>{
  setTimeout(()=>{
    console.log("3");
  },3000);
}).then(()=>{
  setTimeout(()=>{
    console.log("4");
  },4000);
}).then(()=>{
  setTimeout(()=>{
    console.log("5");
  },5000);
}).then(()=>{
  setTimeout(()=>{
    console.log("6");
  },6000);
}).then(()=>{
  setTimeout(()=>{
    console.log("7");
  },7000);
})


// Q.4Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
let promise1 = (arg) => new Promise((resolve,reject)=>{
  if(arg=="yes"){
    return resolve();
  }
  else{
    return reject();
  }
})
promise1("y").then(()=>{
  console.log("Promise resolved");
}).catch(()=>{
  console.log("Promise is rejected");
})

//Que.8--Create examples to explain async await function

async function tryingPromises()
{
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");

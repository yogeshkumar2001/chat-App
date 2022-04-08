socket.on("add-chat" , function(chatObject){
    // append on left
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.innerHTML = `${chatObject.name} : ${chatObject.chatMessage}`;
    chatList.append(chatDiv);
    chatList.scrollTop = chatList.scrollHeight;
})


socket.on("join-chat" , function(name){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("join");
    chatDiv.innerHTML = `${name} joined chat !`;
     chatList.append(chatDiv);
    
     let li = document.createElement("li");
    li.innerHTML = name;
    list.appendChild(li);    
    chatList.scrollTop = chatList.scrollHeight;

})
// socket.on("join-list" ,function(username){
//     let li = document.createElement("li");
//     li.innerHTML = username;
//      list.appendChild(li);
// })


socket.on("left-chat" , function(name){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("leave");
    chatDiv.innerHTML = `${name} left chat !`;
    chatList.append(chatDiv);
    chatList.scrollTop = chatList.scrollHeight;
     let liTAgs = document.querySelectorAll(".list li");
     console.log(liTAgs);
     for(let i =0 ; i< liTAgs.length ; i++){
         if(liTAgs[i].outerText == name){
             liTAgs[i].remove();
         }
     }
})




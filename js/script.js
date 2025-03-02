const completeButtons= document.querySelectorAll(".complete-btn");
const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();  // Local format
console.log(formattedDateTime);
for(let i = 0; i < completeButtons.length; i++){
    const completeBtn= completeButtons[i];
    completeBtn.addEventListener("click", function(event){
        completeBtn.setAttribute("disabled", true);
        alert("Board Updated Successful...");
        const completeTask= completeBtn.getAttribute("disabled") === "true" ? 1 : 0;
        const CurrentTask= parseInt(document.getElementById("task-assigned").innerText);
        const TotalCompletejob= parseInt(document.getElementById("total-complete-job").innerText);
        const remainingTask= CurrentTask - completeTask;
        if(remainingTask === 0){
            alert("Congrats!! You have completed all the current task");
        }
        document.getElementById("task-assigned").innerText= remainingTask;
        const numOfCompleteJob= TotalCompletejob + completeTask;
        document.getElementById("total-complete-job").innerText= numOfCompleteJob;

        const taskTitle= document.querySelectorAll(".task-title")[i].innerText;

        const taskLog= document.getElementById("task-log");
        const div= document.createElement("div");
        div.innerHTML= `
            <div class="bg-[#F4F7FF] p-4 text-justify rounded-lg space-y-3 logs">
                <p>You have Completed the ${taskTitle} at 12.30 p.M</p>      
            </div>
        `
        taskLog.appendChild(div);
    });
}
document.getElementById("clear-logs").addEventListener("click", function(event){
    const logs= document.getElementsByClassName("logs");
    for(let i= 0; i < logs.length; i++){
        const log= logs[i];
        log.classList.add("hidden");
    }

});
document.getElementById("Discover-details").addEventListener("click",function(event){
    const discoverButton = document.getElementById("Discover-details");
    
    if (discoverButton) {
            window.location.href = "main.html";
        }
})

const colors = ["black", "gray", "lightblue", "red", "pink"];
let index = 0;

document.getElementById("bg-change").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; 
});
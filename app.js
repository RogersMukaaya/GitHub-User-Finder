// Intiate github 
const github = new gitHub;

// Intiate github 
const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");

// Get container
const container = document.getElementById("profile");

// Search input event listener
searchUser.addEventListener("keyup", (e) =>{
    // Get input text
    const userText = e.target.value;

    if(userText !== ""){
        github.getUser(userText)
        .then(data => {
                if(data.profile.message === "Not Found"){
                    // Show alert
                    ui.showError("Not found", "alert alert-danger");
                }else{
                    // Show profile
                    ui.showprofile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                
                }
            })
    }else{
        // Clear profile
        ui.hideProfile();
    }
});
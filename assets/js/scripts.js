const filterTriggers = document.querySelectorAll('[data-category]');
const uiProject = document.querySelectorAll('[data-categories*="ui"]')
const graphicsProject = document.querySelectorAll('[data-categories*="graphics"]')
const codeProject = document.querySelectorAll('[data-categories*="code"]')
const projectstList = document.querySelector(".projectsList");

console.log(uiProject);
console.log(graphicsProject);
console.log(codeProject);

filterTriggers.forEach(filterTrigger => {
    filterTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        handleFilterTriggers(e);
    })
})

function handleFilterTriggers(e) {
    let target = e.target;
    let category = target.getAttribute("data-category");

    if (target.classList.contains("active")) {
        projectstList.classList.remove("filtered");
        target.classList.remove("active");
        return;
    }

    uiProject.forEach(project => {
        project.classList.remove("filtered");
    })
    graphicsProject.forEach(project => {
        project.classList.remove("filtered");
    })
    codeProject.forEach(project => {
        project.classList.remove("filtered");
    })

    switch(category) {
        case "photography":
            alert("Page is not avialable right now.");
            return;
            break;
        case "ui":
            uiProject.forEach(project => {
                project.classList.add("filtered");
            })
            break;
        case "graphics":
            graphicsProject.forEach(project => {
                project.classList.add("filtered");
            })   
            break;     
        case "code":
            codeProject.forEach(project => {
                project.classList.add("filtered");
            })
            break;
    }

    projectstList.classList.add("filtered");
    filterTriggers.forEach(filterTrigger => {
        filterTrigger.classList.remove("active");
    })
    target.classList.add("active");

}